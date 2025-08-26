import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-industrial-rail',
  templateUrl: './industrial-rail.page.html',
  styleUrls: ['./industrial-rail.page.scss'],
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
export class IndustrialRailPage implements OnInit {
  private seoService = inject(SeoService);

  constructor(private location: Location) { }

  ngOnInit() {
    this.seoService.updateSEO({
      title: 'Industrial Rail Solutions - MidInfra Capital Partners',
      description: 'MidInfra Capital Partners provides comprehensive industrial rail infrastructure solutions, including rail yard development, switching services, and freight rail connectivity.',
      keywords: 'industrial rail, rail infrastructure, freight rail, rail yard development, rail switching, industrial rail solutions, MidInfra rail',
      url: 'https://midinfra.com/industrial-rail',
      type: 'website'
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