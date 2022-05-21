import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  dateForTheFilter: string;

  changeDate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private readonly http: HttpClient
  ) { }

  getData(withData: boolean, date?: string) {
    let urlApi = 'https://api.nbp.pl/api/exchangerates/tables/A/{data}?format=json';
  
    if (withData) {
      urlApi = urlApi.replace('{data}', this.dateForTheFilter);
    } else {
      urlApi = urlApi.replace('{data}', '');
    }

    return this.http.get(urlApi)
    
  }

  setChangeDate(value) {
    this.changeDate.next(value);
  } 

  getChangeDate(value) {
    this.changeDate.asObservable()
  } 
}
