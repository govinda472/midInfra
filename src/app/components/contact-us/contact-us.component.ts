import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonFooter, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
 selector: 'app-contact-us',
 templateUrl: './contact-us.component.html',
 styleUrls: ['./contact-us.component.scss'],
 standalone: true,
 imports: [
   FormsModule,
   IonFooter,
   IonButton,
   RouterModule
 ]
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
   this.fullName = '';
   this.email = '';
   this.message = '';
 }
}