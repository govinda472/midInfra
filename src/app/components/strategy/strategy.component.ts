import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Added Router import
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

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss'],
  standalone:true,
  imports: [ IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonButtons,
    IonChip,
    IonAvatar,
    IonLabel,
    IonSkeletonText, IonPopover, IonItem, IonList, IonCol, IonRow, IonGrid, IonCard, IonCardContent, IonBadge]  
})
export class StrategyComponent  implements OnInit {
  focusItems = [
    {
      title: 'Industrial Rail',
      iconPath: '../../assets/rail.svg'
    },
    {
      title: 'Ports',
      iconPath: '../../assets/rail.svg'
    },
    {
      title: 'Rail-Integrated Industrial Parks',
      iconPath: '../../assets/rail.svg'
    },
    {
      title: 'Storage and Transportation',
      iconPath: '../../assets/rail.svg'
    },
    {
      title: 'Data Connectivity Infrastructure',
      iconPath: '../../assets/rail.svg'
    }
  ];

  constructor(private router: Router) { }  // Added Router to constructor
  
  ngOnInit() {}

  navigateToIndustrialRail() {  // Added navigation method
    this.router.navigate(['/industrial-rail']);
  }
  navigateToPorts() {
    this.router.navigate(['/ports']);
  }
  navigateToRailParks() {
    this.router.navigate(['/rail-parks']);
  }
  navigateToCommodity() {
    this.router.navigate(['/commodity']);
  }
  navigateToData() {
    this.router.navigate(['/data-connectivity']);
  }
}