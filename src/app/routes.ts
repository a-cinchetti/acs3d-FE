import {Routes} from "@angular/router";
import {PrintPageComponent} from "./pages/print-page/print-page.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }

];
