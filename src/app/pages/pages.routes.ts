import {Routes} from '@angular/router';
import {PrintPageComponent} from "./print-page/print-page.component";
import {TechnologyPageComponent} from "./technology-page/technology-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PrintPageComponent
  },
  {
    path: 'technology',
    component: TechnologyPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  }
];
