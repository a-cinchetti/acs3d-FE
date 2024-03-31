import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CustomLoader } from './custom-loader';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, TranslateModule.forRoot({
      defaultLanguage: 'it-IT',
      loader: { provide: TranslateLoader, useClass: CustomLoader, deps: [HttpClient] },
      isolate: false,
      extend: true
    })
  ],
  exports: [TranslateModule]
})
export class StringTranslateModule { }
