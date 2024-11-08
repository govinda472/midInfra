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
  selector: 'app-aboutus2',
  templateUrl: './aboutus2.component.html',
  styleUrls: ['./aboutus2.component.scss'],
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

export class Aboutus2Component  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
