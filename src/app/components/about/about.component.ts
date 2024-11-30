import { Component, OnInit } from '@angular/core';
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
export class AboutComponent implements OnInit {
  constructor(
    private router: Router,
    private aboutService: AboutService,
    private viewportScroller: ViewportScroller
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

  navigateToLearnAbout() {
    // Store current scroll position before navigation
    const scrollPosition = this.viewportScroller.getScrollPosition();
    sessionStorage.setItem('scrollPosition', JSON.stringify(scrollPosition));
    
    this.aboutService.toggleVisibility();
    this.router.navigate(['/learnabout']);
  }
}