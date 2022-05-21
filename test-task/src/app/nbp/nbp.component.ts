import { Component, OnInit } from '@angular/core';
import { ICurrencies } from './interface/ndp.interfaces';
import { MainService } from './services/main.service';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs/operators';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-nbp',
  templateUrl: './nbp.component.html',
  styleUrls: ['./nbp.component.scss'],
  providers: [MessageService]
})
export class NbpComponent implements OnInit {

  public currencies: ICurrencies[] = [];
  public dateForTheFilter: string;
  public viewOptions
  public selectedView = 'saga-blue'

  constructor(
    private mainService: MainService,
    private themeService: ThemeService,
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.viewOptions = [
      {label: 'Ciemny', value: 'blue-dark'},
      {label: 'Jasny', value: 'saga-blue'}
    ]
    this.getCurrenciesData(false);
  }


  getCurrenciesData(withData: boolean, date?: string): void {
    this.mainService.getData(withData)
    .pipe(take(1))
    .subscribe((res) => {
      this.currencies = res[0].rates;
    })
    
  }

  selectedDate(): void {
    this.mainService.dateForTheFilter = moment(this.dateForTheFilter).format('YYYY-MM-DD');
    this.getCurrenciesData(true);
  }

  inputDate(event): void {
    if (event.target.value.length === 10) {
      const date = new Date(event.target.value);
      if (date < new Date) {
        this.dateForTheFilter = event.target.value;
        this.mainService.dateForTheFilter = moment(this.dateForTheFilter).format('YYYY-MM-DD');
        this.getCurrenciesData(true);
      }
    }
  }

  changeTheme() {
    this.themeService.switchTheme(this.selectedView);
  }

  clear(table: any) {
    table.clear();
  }

}
