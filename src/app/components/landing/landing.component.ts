import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  IonButton,
  IonMenuButton,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonMenuButton,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem
  ]  
})
export class LandingComponent implements OnInit {
  menuItems = ['Home', 'About', 'Strategy', 'Team', 'Contact'];
  @Output() scrollEvent = new EventEmitter<string>();
  
  constructor(private menuCtrl: MenuController) { }
  
  ngOnInit() {}

  async closeMenu() {
    await this.menuCtrl.close('main-menu');
  }
  
  async navigateTo(item: string) {
    let elementId = '';
    switch(item.toLowerCase()) {
      case 'home':
        elementId = 'home';
        break;
      case 'about':
        elementId = 'about';
        break;
      case 'strategy':
        elementId = 'strategy';
        break;
      case 'team':
        elementId = 'teams';
        break;
      case 'contact':
        elementId = 'contact-us';
        break;
    }
    this.scrollEvent.emit(elementId);
    this.closeMenu();
  }
  
  isMobile() {
    return window.innerWidth <= 768;
  }
}