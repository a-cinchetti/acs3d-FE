import { Component } from '@angular/core';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrl: './print-page.component.scss'
})
export class PrintPageComponent {

  reviewList = [
    {
      reviewer: 'Fabio C.',
      company: 'Cogifer Srl',
      review: 'FABIOC'
    },
    {
      reviewer: 'Michel S.',
      review: 'MICHELS'
    },
    {
      reviewer: 'Angelo C.',
      review: 'ANGELOC'
    }
  ]
}
