import { Component, OnInit } from '@angular/core';
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
      title: 'Commodity Management, Storage and Transportation',
      iconPath: '../../assets/rail.svg'
    },
    {
      title: 'Data Connectivity Infrastructure',
      iconPath: '../../assets/rail.svg'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
