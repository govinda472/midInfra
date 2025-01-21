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
    if (elementId === 'home') {
      this.content.scrollToTop(500);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        const reducedOffset = element.offsetTop * 0.97;
        this.content.scrollToPoint(0, reducedOffset, 500);
      }
    }
  }
}