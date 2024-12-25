import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import {
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-ben',
  templateUrl: './ben.page.html',
  styleUrls: ['./ben.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonIcon
  ]
})
export class BenPage implements OnInit {
  constructor(private location: Location) { }
  
  ngOnInit() {}
  
  closePage() {
    this.location.back();
  }
}