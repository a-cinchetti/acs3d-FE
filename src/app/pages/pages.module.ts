import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./homepage/homepage.component";
import {TranslateModule} from "@ngx-translate/core";
import { PrintPageComponent } from './print-page/print-page.component';
import {MatButton} from "@angular/material/button";
import {ComponentsModule} from "../components/components.module";



@NgModule({
  declarations: [
    HomepageComponent,
    PrintPageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatButton,
    ComponentsModule,
  ]
})
export class PagesModule { }
