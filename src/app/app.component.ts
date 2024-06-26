import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'acs3d-FE';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('it-IT');
    translate.use('it-IT');
  }
}
