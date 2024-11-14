import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  standalone:true,
  imports:[FormsModule]
})
export class ContactUsComponent {
  fullName = '';
  email = '';
  message = '';

  onSubmit() {
    console.log('Form Submitted');
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Message:', this.message);

    // You can handle form submission here, such as sending data to an API
    // Reset the form after submission
    this.fullName = '';
    this.email = '';
    this.message = '';
  }

}
