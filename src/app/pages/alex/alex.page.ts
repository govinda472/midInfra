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
  selector: 'app-alex',
  templateUrl: './alex.page.html',
  styleUrls: ['./alex.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonIcon
  ]
})
export class AlexPage implements OnInit {
  constructor(private location: Location) { }
  
  ngOnInit() {}
  
  closePage() {
    this.location.back();
  }
}