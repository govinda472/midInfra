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
  selector: 'app-data-connectivity',
  templateUrl: './data-connectivity.page.html',
  styleUrls: ['./data-connectivity.page.scss'],
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
export class DataConnectivityPage implements OnInit {
  private seoService = inject(SeoService);

  constructor(private location: Location) { }

  ngOnInit() {
    this.seoService.updateSEO({
      title: 'Data Connectivity Infrastructure - MidInfra Capital Partners',
      description: 'MidInfra Capital Partners invests in data connectivity infrastructure including data centers, fiber networks, and digital infrastructure supporting modern connectivity needs.',
      keywords: 'data connectivity, data centers, fiber networks, digital infrastructure, telecommunications, connectivity solutions, data infrastructure, MidInfra data',
      url: 'https://midinfra.com/data-connectivity',
      type: 'website',
      image: 'https://midinfra.com/assets/data.png',
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