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
  selector: 'app-commodity',
  templateUrl: './commodity.page.html',
  styleUrls: ['./commodity.page.scss'],
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
export class CommodityPage implements OnInit {
  private seoService = inject(SeoService);

  constructor(private location: Location) { }

  ngOnInit() {
    this.seoService.updateSEO({
      title: 'Commodity Storage & Transportation - MidInfra Capital Partners',
      description: 'MidInfra Capital Partners provides strategic investment in commodity storage and transportation infrastructure, supporting efficient supply chain logistics and bulk commodity handling.',
      keywords: 'commodity storage, commodity transportation, bulk handling, supply chain logistics, commodity infrastructure, storage facilities, MidInfra commodity',
      url: 'https://midinfra.com/commodity',
      type: 'website',
      image: 'https://midinfra.com/assets/storageandtransport.png',
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