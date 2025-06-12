import { Component, OnInit, Output, EventEmitter, inject, ElementRef, HostListener } from '@angular/core';
import {
  IonButton,
  IonMenuButton,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonFooter } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { ShowlogoService } from 'src/app/services/show/showlogo.service';
import { RouterModule } from '@angular/router';

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
    IonItem,
    IonLabel,
    IonFooter,
    RouterModule
  ]
})
export class LandingComponent implements OnInit {
  showLogo = inject(ShowlogoService);
  menuItems = ['Home', 'About', 'Strategy', 'Team', 'Contact'];
  @Output() scrollEvent = new EventEmitter<string>();
  showFooter = false;
 
  constructor(
    private menuCtrl: MenuController,
    private elementRef: ElementRef
  ) { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.showFooter) {
      this.showFooter = false;
    }
  }
 
  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  async closeMenu() {
    await this.menuCtrl.close();
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

    if (this.isMobile()) {
      const element = document.getElementById(elementId);
      if (element) {
        if (elementId === 'teams' || elementId === 'contact-us') {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        } else {
          const extraScroll = {
            'home': 0,
            'about': 100,
            'strategy': 100
          }[elementId] || 0;

          const offset = element.offsetTop + extraScroll;
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
      }
    } else {
      this.scrollEvent.emit(elementId);
    }
    
    this.closeMenu();
  }
 
  isMobile() {
    return window.innerWidth <= 768;
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            this.showLogo.set_showLogo = false;
          }
        });
      },
      {
        threshold: 1,
        rootMargin: '0px'
      }
    );
    observer.observe(this.elementRef.nativeElement);
  }

  scrollDown() {
    this.showFooter = true;
    const aboutSection = document.getElementById('about');
    if (aboutSection && this.isMobile()) {
      const offset = aboutSection.offsetTop + 100;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
    this.scrollEvent.emit('about');
  }
}