import { Component, OnInit, ElementRef, AfterViewInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonButtons,
  IonChip,
  IonAvatar,
  IonLabel,
  IonSkeletonText,
  IonPopover,
  IonItem,
  IonList,
  IonCol,
  IonRow,
  IonGrid,
  IonCard,
  IonCardContent,
  IonBadge
} from '@ionic/angular/standalone';
import { AboutService } from './about.service';
import { ShowlogoService } from 'src/app/services/show/showlogo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonButtons,
    IonChip,
    IonAvatar,
    IonLabel,
    IonSkeletonText,
    IonPopover,
    IonItem,
    IonList,
    IonCol,
    IonRow,
    IonGrid,
    IonCard,
    IonCardContent,
    IonBadge
  ]
})
export class AboutComponent implements OnInit, AfterViewInit {
  showLogo = inject(ShowlogoService);
  constructor(
    private router: Router,
    private aboutService: AboutService,
    private viewportScroller: ViewportScroller,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    // Restore scroll position if returning from learnabout page
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      const position = JSON.parse(savedPosition);
      setTimeout(() => {
        this.viewportScroller.scrollToPosition(position);
        sessionStorage.removeItem('scrollPosition');
      }, 0);
    }
  }

  ngAfterViewInit() {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Check if element is more than 50% visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            console.log('hello');
            this.showLogo.set_showLogo = true;
          }
        });
      },
      {
        threshold: 0.7, // Triggers when 50% of the component is visible
        rootMargin: '0px' // No margin adjustment
      }
    );

    // Start observing the component
    observer.observe(this.elementRef.nativeElement);
  }

  navigateToLearnAbout() {
    // Store current scroll position before navigation
    const scrollPosition = this.viewportScroller.getScrollPosition();
    sessionStorage.setItem('scrollPosition', JSON.stringify(scrollPosition));
    
    this.aboutService.toggleVisibility();
    this.router.navigate(['/learnmore']);
  }
}