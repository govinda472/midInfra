// home.page.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:true,
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
    IonSkeletonText, IonPopover, IonItem, IonList, IonCol, IonRow, IonGrid, IonCard, IonCardContent, IonBadge,
    LandingComponent,
    AboutComponent,
    Aboutus2Component,
    StrategyComponent,
    TeamsComponent,
    ContactUsComponent
],

})
export class HomePage {
 
  
  constructor() {}

 
}