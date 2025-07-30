import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import {
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-rodney',
  templateUrl: './rodney.page.html',
  styleUrls: ['./rodney.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonIcon
  ]
})
export class RodneyPage implements OnInit {
  constructor(private location: Location) { }
  
  ngOnInit() {}
  
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    this.closePage();
  }
  
  closePage() {
    this.location.back();
  }
} 