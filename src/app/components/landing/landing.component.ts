import { Component, OnInit, Output, EventEmitter, inject, ElementRef } from '@angular/core';
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
import { ShowlogoService } from 'src/app/services/show/showlogo.service';

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
  showLogo = inject(ShowlogoService);
  menuItems = ['Home', 'About', 'Strategy', 'Team', 'Contact'];
  @Output() scrollEvent = new EventEmitter<string>();
  
  constructor(
    private menuCtrl: MenuController,
    private elementRef: ElementRef
  ) { }
  
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

  ngAfterViewInit() {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Check if element is 100% visible
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            this.showLogo.set_showLogo = false;
          }
        });
      },
      {
        threshold: 1, // Triggers when 100% of component is visible
        rootMargin: '0px'
      }
    );

    // Start observing the component
    observer.observe(this.elementRef.nativeElement);
  }
}