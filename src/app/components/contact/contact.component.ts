import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder,) {
  }

  sendRequest() {
    if (this.contactForm.valid) {
      this.contactForm.reset();
    }
  }

}
