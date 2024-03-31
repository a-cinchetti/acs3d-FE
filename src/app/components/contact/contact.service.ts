import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  sendEmailRequest(data: any) {
    this.http.post('https://acs3d-emailsender.acworker.workers.dev/api/sendmail', data, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }

    })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
