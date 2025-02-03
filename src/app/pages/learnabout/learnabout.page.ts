import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { IonButton, IonIcon, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-learnabout',
  templateUrl: './learnabout.page.html',
  styleUrls: ['./learnabout.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon, IonContent]
})
export class LearnaboutPage implements OnInit {
  constructor(private location: Location) {
    addIcons({ closeOutline });
  }
  
  ngOnInit() {}
  
  closePage() {
    this.location.back();
  }
}