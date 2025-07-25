import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  mailOutline, 
  mailSharp, 
  paperPlaneOutline, 
  paperPlaneSharp, 
  heartOutline, 
  heartSharp, 
  archiveOutline, 
  archiveSharp, 
  trashOutline, 
  trashSharp, 
  warningOutline, 
  warningSharp, 
  bookmarkOutline, 
  bookmarkSharp,
  closeOutline // Add this import
} from 'ionicons/icons';
import { Router } from '@angular/router';
import { NavigateService } from './services/navigate.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonApp, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  @ViewChild(IonContent) content!: IonContent;
  
  public appPages = [
    { title: 'Home', url: '/', fragment: 'home' },
    { title: 'About', url: '/', fragment: 'about' },
    { title: 'Strategy', url: '/', fragment: 'strategy' },
    { title: 'Team', url: '/', fragment: 'teams' },
    { title: 'Contact', url: '/', fragment: 'contact-us' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  navigateService = inject(NavigateService);
  constructor(
    private router: Router
  ) {
    addIcons({ 
      mailOutline, 
      mailSharp, 
      paperPlaneOutline, 
      paperPlaneSharp, 
      heartOutline, 
      heartSharp, 
      archiveOutline, 
      archiveSharp, 
      trashOutline, 
      trashSharp, 
      warningOutline, 
      warningSharp, 
      bookmarkOutline, 
      bookmarkSharp,
      closeOutline // Add this to the addIcons call
    });
  }


  scrollTo(elementId: string) {
    this.navigateService.triggerScroll(elementId);
  }

  
}