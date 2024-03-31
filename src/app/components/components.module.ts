import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcsButtonComponent} from "./acs-button/acs-button.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {ContactComponent} from './contact/contact.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AcsButtonComponent, ContactComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [AcsButtonComponent, ContactComponent]
})
export class ComponentsModule { }
