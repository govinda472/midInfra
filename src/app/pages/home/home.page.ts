import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  IonSkeletonText, IonPopover, IonItem, IonList, IonCol, IonRow, IonGrid, IonCard, IonCardContent, IonBadge } from '@ionic/angular/standalone';
 
import { AboutComponent } from 'src/app/components/about/about.component';
import { Aboutus2Component } from 'src/app/components/aboutus2/aboutus2.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { StrategyComponent } from "../../components/strategy/strategy.component";
import { TeamsComponent } from "../../components/teams/teams.component";
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";
import { NavigateService } from '../../services/navigate.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
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
    IonBadge,
    LandingComponent,
    AboutComponent,
    Aboutus2Component,
    StrategyComponent,
    TeamsComponent,
    ContactUsComponent
  ]
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;
  private scrollSubscription!: Subscription;
  navigateService = inject(NavigateService);
  constructor() {}

  ngOnInit() {
    this.scrollSubscription = this.navigateService.scrollEvent$.subscribe(elementId => {
      this.scrollTo(elementId);
    });
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  scrollTo(elementId: string) {
    setTimeout(() => {
      if (elementId === 'home') {
        this.content.scrollToTop(500);
      } else {
        const element = document.getElementById(elementId);
        if (element) {
          const header = document.querySelector('.nav-header');
          let headerHeight = 0;
          if (header) {
            const style = window.getComputedStyle(header);
            if (style.position === 'fixed' || style.position === 'sticky') {
              headerHeight = header.clientHeight;
            }
          }
          this.content.getScrollElement().then(scrollEl => {
            const rect = element.getBoundingClientRect();
            const scrollRect = scrollEl.getBoundingClientRect();
            let offset = rect.top - scrollRect.top + scrollEl.scrollTop - headerHeight;
            // iOS-specific tweak
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(typeof (window as any).MSStream !== 'undefined');
            if (isIOS) {
              offset = offset - 20; // tweak as needed
            }
            if (offset < 0) offset = 0;
            console.log('elementId:', elementId, 'headerHeight:', headerHeight, 'offset:', offset, 'isIOS:', isIOS);
            this.content.scrollToPoint(0, offset, 500);
          });
        }
      }
    }, 700);
  }
}