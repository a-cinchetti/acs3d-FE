import {Component, HostListener} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  mobile: boolean = window.innerWidth <= 970;
  screenSize = window.innerWidth;

  contactForm = this.formBuilder.group({
    name: this.formBuilder.control(null, [Validators.required]),
    email: this.formBuilder.control(null, [Validators.required, Validators.email]),
    message: this.formBuilder.control(null, [Validators.required, Validators.maxLength(1024)]),
    privacy: this.formBuilder.control(null, [Validators.requiredTrue])
  });

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setMobile(event.target.innerWidth);
  }

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {
  }

  sendRequest() {
    if (this.contactForm.valid) {
      const response = {
        message: this.contactForm.value.message,
        email: this.contactForm.value.email,
        name: this.contactForm.value.name
      };
      this.contactService.sendEmailRequest(response);
      this.contactForm.reset();
    }
  }

  setMobile(sizeScreen: number){
    this.mobile = sizeScreen <= 970;
    this.screenSize = sizeScreen;
  }

  getIsHigher(number: number) {
    console.log(this.screenSize, number);
    return this.screenSize >= number;
  }
}
