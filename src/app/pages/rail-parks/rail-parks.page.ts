import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonIcon 
} from '@ionic/angular/standalone';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-rail-parks',
  templateUrl: './rail-parks.page.html',
  styleUrls: ['./rail-parks.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonButton,
    IonIcon
  ]
})
export class RailParksPage implements OnInit {
  private seoService = inject(SeoService);

  constructor(private location: Location) { }

  ngOnInit() {
    this.seoService.updateSEO({
      title: 'Rail Parks Infrastructure - MidInfra Capital Partners',
      description: 'MidInfra Capital Partners develops and invests in rail park infrastructure, providing integrated rail and logistics solutions for efficient freight transportation and distribution.',
      keywords: 'rail parks, rail logistics, freight distribution, rail infrastructure, intermodal facilities, rail yard development, logistics parks, MidInfra rail parks',
      url: 'https://midinfra.com/rail-parks',
      type: 'website',
      image: 'https://midinfra.com/assets/railpark.png',
      author: 'MidInfra Capital Partners',
      locale: 'en-US',
      modifiedTime: new Date().toISOString(),
      section: 'Infrastructure Investment'
    });
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    this.closePage();
  }

  closePage() {
    this.location.back();
  }
}