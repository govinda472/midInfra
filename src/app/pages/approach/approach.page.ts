import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-approach',
  templateUrl: './approach.page.html',
  styleUrls: ['./approach.page.scss'],
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
export class ApproachPage implements OnInit {
  private seoService = inject(SeoService);

  constructor(private location: Location) { }

  ngOnInit() {
    this.seoService.updateSEO({
      title: 'Our Investment Approach - MidInfra Capital Partners',
      description: 'Learn about MidInfra Capital Partners\' disciplined investment approach to infrastructure assets, focusing on rail, ports, and data connectivity with proven expertise.',
      keywords: 'investment approach, infrastructure investment strategy, rail investment, ports investment, data connectivity investment, MidInfra approach',
      url: 'https://midinfra.com/approach',
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