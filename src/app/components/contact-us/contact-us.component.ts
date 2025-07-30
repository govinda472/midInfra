import { Component, OnInit, HostListener, inject, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonFooter, IonButton, IonContent } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { ShowlogoService } from 'src/app/services/show/showlogo.service';

@Component({
 selector: 'app-contact-us',
 templateUrl: './contact-us.component.html',
 styleUrls: ['./contact-us.component.scss'],
 standalone: true,
 imports: [
   FormsModule,
   IonFooter,
   IonButton,
   IonContent,
   RouterModule
 ]
})
export class ContactUsComponent implements OnInit, AfterViewInit, OnDestroy {
 showLogo = inject(ShowlogoService);
 fullName = '';
 email = '';
 message = '';
 showFooter = false;
 private observer?: IntersectionObserver;

 constructor(private elementRef: ElementRef) {}

 ngOnInit() {
   this.showFooter = false;
   console.log('ContactUsComponent initialized');
 }

 ngAfterViewInit() {
   // Observe the landing component instead - show footer when NOT on landing page
   const landingElement = document.querySelector('app-landing');
   if (landingElement) {
     this.observer = new IntersectionObserver(
       (entries) => {
         entries.forEach(entry => {
           // Show footer when landing section is NOT intersecting (i.e., scrolled away from landing)
           this.showFooter = !entry.isIntersecting;
           console.log('Landing section intersecting:', entry.isIntersecting, 'showFooter:', this.showFooter);
         });
       },
       {
         threshold: 0.9, // Landing must be 90% out of view
         rootMargin: '0px'
       }
     );
     this.observer.observe(landingElement);
   } else {
     console.log('Landing element not found');
   }
 }

 ngOnDestroy() {
   if (this.observer) {
     this.observer.disconnect();
   }
 }

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