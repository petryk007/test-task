import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeArr = {
    'saga-blue': 'https://www.primefaces.org/primeng/assets/components/themes/saga-blue/theme.css',
    'blue-dark': 'https://www.primefaces.org/primeng/assets/components/themes/bootstrap4-dark-blue/theme.css'
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: string) {
      let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

      if (themeLink) {
          themeLink.href = this.themeArr[theme];
      }
  }
}
