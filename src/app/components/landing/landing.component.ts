import { Component, OnInit } from '@angular/core';
import {

  IonButton,
  IonMenuButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone:true,
  imports: [ 
    IonButton,
    IonMenuButton
   ]  
})
export class LandingComponent  implements OnInit {
  menuItems = ['Home', 'About', 'Strategy', 'Team', 'Contact'];
  constructor() { }

  ngOnInit() {}
  navigateTo(item: string) {
    // Add your navigation logic here
    console.log(`Navigating to ${item}`);
  }

  isMobile() {
    return window.innerWidth <= 768;
  }
}
