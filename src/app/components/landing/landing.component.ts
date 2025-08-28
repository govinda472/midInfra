import { Component, OnInit, OnDestroy, Output, EventEmitter, inject, ElementRef, HostListener } from '@angular/core';
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
} from '@ionic/angular/standalone';
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
    RouterModule
  ]
})
export class LandingComponent implements OnInit, OnDestroy {
  showLogo = inject(ShowlogoService);
  menuItems = ['Home', 'About', 'Strategy', 'Team', 'Contact'];
  @Output() scrollEvent = new EventEmitter<string>();
  private navigationTimer?: number;
 
  constructor(
    private menuCtrl: MenuController,
    private elementRef: ElementRef
  ) { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Clear navigation timer if user scrolls (navigation will be shown by scroll trigger instead)
    if (this.navigationTimer) {
      clearTimeout(this.navigationTimer);
      this.navigationTimer = undefined;
    }
  }
 
  ngOnInit() {
    this.menuCtrl.enable(true);
    // Start 30-second timer to show navigation bar
    this.startNavigationTimer();
  }

  private startNavigationTimer() {
    this.navigationTimer = setTimeout(() => {
      if (!this.showLogo._showLogo) {
        this.showLogo.set_showLogo = true;
      }
    }, 30000); // 30 seconds
  }

  async closeMenu() {
    await this.menuCtrl.close();
  }
 
  async navigateTo(item: string) {
    console.log('LANDING navigateTo', item);
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
        const header = document.querySelector('.nav-header');
        let headerHeight = 0;
        let headerPos = '';
        if (header) {
          const style = window.getComputedStyle(header);
          headerPos = style.position;
          if (style.position === 'fixed' || style.position === 'sticky') {
            headerHeight = header.clientHeight;
          }
        }
        console.log('Header height:', headerHeight, 'Header position:', headerPos);
        let offset = element.offsetTop - headerHeight;
        if (offset < 0) offset = 0;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
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

  ngOnDestroy() {
    if (this.navigationTimer) {
      clearTimeout(this.navigationTimer);
    }
  }

  scrollDown() {
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