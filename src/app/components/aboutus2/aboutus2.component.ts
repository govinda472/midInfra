import { Component, OnInit, inject } from '@angular/core';  // Added inject here
import { Router } from '@angular/router';
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
import { Aboutus2Service } from './aboutus2.service';

@Component({
  selector: 'app-aboutus2',
  templateUrl: './aboutus2.component.html',
  styleUrls: ['./aboutus2.component.scss'],
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
export class Aboutus2Component implements OnInit {
  private router = inject(Router);
  private aboutus2Service = inject(Aboutus2Service);

  constructor() { }

  ngOnInit() {}


  navigateToMessage() {
    this.aboutus2Service.toggleVisibility();
    this.router.navigate(['/message']);
  }


  navigateToHistory() {
    this.aboutus2Service.toggleVisibility();
    this.router.navigate(['/history']);
  }

  navigateToApproach() {
    this.aboutus2Service.toggleVisibility();
    this.router.navigate(['/approach']);
  }
}