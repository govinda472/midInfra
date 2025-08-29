import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import {
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { SeoService } from '../../services/seo.service';

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
  private seoService = inject(SeoService);

  constructor(private location: Location) { }
  
  ngOnInit() {
    const personStructuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Alex Weinstein",
      "jobTitle": "Private Equity Investor",
      "worksFor": {
        "@type": "Organization",
        "name": "MidInfra Capital Partners",
        "url": "https://midinfra.com"
      },
      "url": "https://midinfra.com/alex",
      "image": "https://midinfra.com/assets/alex headshot.jpg",
      "description": "Private Equity Investor at MidInfra Capital Partners with expertise in infrastructure investment and asset management."
    };

    this.seoService.updateSEO({
      title: 'Alex Weinstein - Private Equity Investor | MidInfra Capital Partners',
      description: 'Meet Alex Weinstein, Private Equity Investor at MidInfra Capital Partners. Learn about his expertise in infrastructure investment and asset management.',
      keywords: 'Alex Weinstein, Private Equity Investor, MidInfra team, infrastructure investment, asset management, investment professional',
      url: 'https://midinfra.com/alex',
      type: 'profile',
      image: 'https://midinfra.com/assets/alex headshot.jpg',
      author: 'MidInfra Capital Partners',
      locale: 'en-US',
      modifiedTime: new Date().toISOString(),
      section: 'Team',
      structuredData: personStructuredData
    });

    // Add breadcrumbs
    this.seoService.addBreadcrumbStructuredData([
      { name: 'Home', url: 'https://midinfra.com' },
      { name: 'Team', url: 'https://midinfra.com/#teams' },
      { name: 'Alex Weinstein', url: 'https://midinfra.com/alex' }
    ]);
  }
  
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    this.closePage();
  }
  
  closePage() {
    this.location.back();
  }
}