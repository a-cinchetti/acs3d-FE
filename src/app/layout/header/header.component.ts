import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {

  currentLang: string = this.translateService.currentLang;
  constructor(private router: Router, private translateService: TranslateService) {
  }

  navigateToPage(path: string) {
    this.router.navigate([path]);
  }

  getLanguage(lang: string) {
    return this.translateService.instant('LANGUAGE.' + lang);
  }

  changeLanguage(language: MatSelectChange) {
    this.translateService.use(language.value);
  }
}
