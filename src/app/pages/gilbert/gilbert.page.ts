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
  selector: 'app-gilbert',
  templateUrl: './gilbert.page.html',
  styleUrls: ['./gilbert.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonContent,
    IonButton,
    IonIcon
  ]
})
export class GilbertPage implements OnInit {
  private seoService = inject(SeoService);

  constructor(private location: Location) { }

  ngOnInit() {
    const personStructuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Gilbert Lamphere",
      "jobTitle": "Team Member",
      "worksFor": {
        "@type": "Organization",
        "name": "MidInfra Capital Partners",
        "url": "https://midinfra.com"
      },
      "url": "https://midinfra.com/gilbert",
      "image": "https://midinfra.com/assets/michael.jpg",
      "description": "Team Member at MidInfra Capital Partners with expertise in infrastructure investment and project management."
    };

    this.seoService.updateSEO({
      title: 'Gilbert Lamphere - Team Member | MidInfra Capital Partners',
      description: 'Meet Gilbert Lamphere, Team Member at MidInfra Capital Partners. Learn about his expertise in infrastructure investment and project management.',
      keywords: 'Gilbert Lamphere, MidInfra team, infrastructure investment, project management, investment professional',
      url: 'https://midinfra.com/gilbert',
      type: 'profile',
      image: 'https://midinfra.com/assets/michael.jpg',
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
      { name: 'Gilbert Lamphere', url: 'https://midinfra.com/gilbert' }
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