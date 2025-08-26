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
  selector: 'app-rajgupta',
  templateUrl: './rajgupta.page.html',
  styleUrls: ['./rajgupta.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonContent,
    IonButton,
    IonIcon
  ]
})
export class RajGuptaPage implements OnInit {
  private seoService = inject(SeoService);

  constructor(private location: Location) { }

  ngOnInit() {
    const personStructuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Raj K. Gupta",
      "jobTitle": "Managing Partner",
      "worksFor": {
        "@type": "Organization",
        "name": "MidInfra Capital Partners",
        "url": "https://midinfra.com"
      },
      "url": "https://midinfra.com/rgupta",
      "image": "https://midinfra.com/assets/team6.jpg",
      "description": "Managing Partner at MidInfra Capital Partners with expertise in infrastructure investment and leadership in rail and port development."
    };

    this.seoService.updateSEO({
      title: 'Raj Gupta - Managing Partner | MidInfra Capital Partners',
      description: 'Meet Raj Gupta, Managing Partner at MidInfra Capital Partners. Learn about his expertise in infrastructure investment and leadership in rail and port development.',
      keywords: 'Raj Gupta, Managing Partner, MidInfra leadership, infrastructure investment expert, rail investment, port investment',
      url: 'https://midinfra.com/rgupta',
      type: 'profile',
      structuredData: personStructuredData
    });

    // Add breadcrumbs
    this.seoService.addBreadcrumbStructuredData([
      { name: 'Home', url: 'https://midinfra.com' },
      { name: 'Team', url: 'https://midinfra.com/#teams' },
      { name: 'Raj K. Gupta', url: 'https://midinfra.com/rgupta' }
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