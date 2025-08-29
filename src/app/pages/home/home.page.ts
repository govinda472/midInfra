import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonButtons,
  IonChip,
  IonAvatar,
  IonLabel,
  IonSkeletonText, IonPopover, IonItem, IonList, IonCol, IonRow, IonGrid, IonCard, IonCardContent, IonBadge } from '@ionic/angular/standalone';
 
import { AboutComponent } from 'src/app/components/about/about.component';
import { Aboutus2Component } from 'src/app/components/aboutus2/aboutus2.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { StrategyComponent } from "../../components/strategy/strategy.component";
import { TeamsComponent } from "../../components/teams/teams.component";
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";
import { NavigateService } from '../../services/navigate.service';
import { SeoService } from '../../services/seo.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonButtons,
    IonChip,
    IonAvatar,
    IonLabel,
    IonSkeletonText, 
    IonPopover, 
    IonItem, 
    IonList, 
    IonCol, 
    IonRow, 
    IonGrid, 
    IonCard, 
    IonCardContent, 
    IonBadge,
    LandingComponent,
    AboutComponent,
    Aboutus2Component,
    StrategyComponent,
    TeamsComponent,
    ContactUsComponent
  ]
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;
  private scrollSubscription!: Subscription;
  navigateService = inject(NavigateService);
  seoService = inject(SeoService);
  
  constructor() {}

  ngOnInit() {
    // Set enhanced SEO for home page
    this.seoService.updateSEO({
      title: 'MidInfra Capital Partners - Next-Generation Infrastructure Asset Management | $40B+ Value Creation',
      description: 'MidInfra Capital Partners is a next-generation infrastructure asset management company with nearly 40 years track record. Based in La Jolla, CA and New York, NY, we deploy $1+ billion in rail, ports, terminals, data centers and wireless infrastructure assets, creating platform companies and generating $40+ billion in value for investors.',
      keywords: 'infrastructure asset management, private equity, rail infrastructure, ports investment, data connectivity, infrastructure fund, freight railroads, terminals, wireless communications, MidInfra Capital Partners, La Jolla investment firm, New York private equity, maritime logistics, commodity transportation, industrial rail solutions, asset-intensive segments, platform companies, infrastructure investing, transportation infrastructure, digital infrastructure',
      url: 'https://midinfra.com/home',
      type: 'website',
      image: 'https://midinfra.com/assets/midlogo.png',
      author: 'MidInfra Capital Partners',
      locale: 'en-US',
      modifiedTime: new Date().toISOString(),
      section: 'Infrastructure Investment',
      publishedTime: '2025-01-14T12:00:00+00:00'
    });

    // Add comprehensive structured data for home page
    const homePageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "MidInfra Capital Partners - Home",
      "description": "Next-generation infrastructure asset management company with nearly 40 years track record specializing in rail, ports, and data connectivity investments.",
      "url": "https://midinfra.com/home",
      "mainEntity": {
        "@type": ["Organization", "InvestmentFund"],
        "name": "MidInfra Capital Partners",
        "description": "Infrastructure private equity firm with 29 followers on LinkedIn, specializing in asset management and freight railroads.",
        "foundingDate": "1985",
        "numberOfEmployees": "2-10",
        "industry": "Investment Management",
        "address": [{
          "@type": "PostalAddress",
          "addressLocality": "La Jolla",
          "addressRegion": "California",
          "addressCountry": "US"
        }],
        "sameAs": ["https://www.linkedin.com/company/midinfra-capital-partners-llc/"],
        "knowsAbout": [
          "private equity",
          "infrastructure investing", 
          "asset management",
          "freight railroads"
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://midinfra.com/home"
        }]
      }
    };

    this.seoService.updateSEO({
      title: 'MidInfra Capital Partners - Next-Generation Infrastructure Asset Management | $40B+ Value Creation',
      description: 'MidInfra Capital Partners is a next-generation infrastructure asset management company with nearly 40 years track record. Based in La Jolla, CA and New York, NY, we deploy $1+ billion in rail, ports, terminals, data centers and wireless infrastructure assets, creating platform companies and generating $40+ billion in value for investors.',
      keywords: 'infrastructure asset management, private equity, rail infrastructure, ports investment, data connectivity, infrastructure fund, freight railroads, terminals, wireless communications, MidInfra Capital Partners, La Jolla investment firm, New York private equity, maritime logistics, commodity transportation, industrial rail solutions, asset-intensive segments, platform companies, infrastructure investing, transportation infrastructure, digital infrastructure',
      url: 'https://midinfra.com/home',
      type: 'website',
      image: 'https://midinfra.com/assets/midlogo.png',
      author: 'MidInfra Capital Partners',
      locale: 'en-US',
      modifiedTime: new Date().toISOString(),
      section: 'Infrastructure Investment',
      publishedTime: '2025-01-14T12:00:00+00:00',
      structuredData: homePageStructuredData
    });

    this.scrollSubscription = this.navigateService.scrollEvent$.subscribe(elementId => {
      this.scrollTo(elementId);
    });
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  scrollTo(elementId: string) {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }
}