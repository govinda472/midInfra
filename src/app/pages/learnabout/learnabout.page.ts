import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IonButton, IonIcon, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-learnabout',
  templateUrl: './learnabout.page.html',
  styleUrls: ['./learnabout.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonContent]
})
export class LearnaboutPage implements OnInit {
  constructor(
    private location: Location
  ) {}

  ngOnInit() {}

  closePage() {
    // This will navigate back while preserving scroll position
    this.location.back();
  }
}