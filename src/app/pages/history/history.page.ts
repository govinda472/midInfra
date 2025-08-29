import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
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
export class HistoryPage implements OnInit {
  private seoService = inject(SeoService);

  constructor(private location: Location) { }

  ngOnInit() {
    this.seoService.updateSEO({
      title: 'Our History - MidInfra Capital Partners | 40 Years of Infrastructure Excellence',
      description: 'Discover MidInfra Capital Partners\' nearly 40-year history of infrastructure investment excellence. From founding in 1985 to generating $40+ billion in value creation for investors.',
      keywords: 'MidInfra history, infrastructure investment history, 40 years experience, founding 1985, value creation, infrastructure expertise, investment track record',
      url: 'https://midinfra.com/history',
      type: 'website',
      image: 'https://midinfra.com/assets/historyimg.jpg',
      author: 'MidInfra Capital Partners',
      locale: 'en-US',
      modifiedTime: new Date().toISOString(),
      section: 'About Us'
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