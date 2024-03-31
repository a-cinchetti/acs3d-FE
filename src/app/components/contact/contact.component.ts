import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm = this.formBuilder.group({
    name: this.formBuilder.control(null, [Validators.required]),
    email: this.formBuilder.control(null, [Validators.required, Validators.email]),
    message: this.formBuilder.control(null, [Validators.required, Validators.maxLength(1024)]),
    privacy: this.formBuilder.control(null, [Validators.requiredTrue])
  });

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

}
