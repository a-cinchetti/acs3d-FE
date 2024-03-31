import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {PrintPageComponent} from './print-page/print-page.component';
import {MatButton} from "@angular/material/button";
import {ComponentsModule} from "../components/components.module";
import {RouterModule} from "@angular/router";
import {TechnologyPageComponent} from './technology-page/technology-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {PAGES_ROUTES} from "./pages.routes";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    PrintPageComponent,
    TechnologyPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatButton,
    ComponentsModule,
    RouterModule.forChild(PAGES_ROUTES),
    MatIconModule
  ]
})
export class PagesModule { }
