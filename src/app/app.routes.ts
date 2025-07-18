import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'learnmore',
    loadComponent: () => import('./pages/learnabout/learnabout.page').then( m => m.LearnaboutPage)
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history.page').then( m => m.HistoryPage)
  },
  {
    path: 'approach',
    loadComponent: () => import('./pages/approach/approach.page').then( m => m.ApproachPage)
  },
  {
    path: 'message',
    loadComponent: () => import('./pages/message/message.page').then( m => m.MessagePage)
  },
  {
    path: 'industrial-rail',
    loadComponent: () => import('./pages/industrial-rail/industrial-rail.page').then( m => m.IndustrialRailPage)
  },
  {
    path: 'ports',
    loadComponent: () => import('./pages/ports/ports.page').then( m => m.PortsPage)
  },
  {
    path: 'rail-parks',
    loadComponent: () => import('./pages/rail-parks/rail-parks.page').then( m => m.RailParksPage)
  },
  {
    path: 'commodity',
    loadComponent: () => import('./pages/commodity/commodity.page').then( m => m.CommodityPage)
  },
  {
    path: 'data-connectivity',
    loadComponent: () => import('./pages/data-connectivity/data-connectivity.page').then( m => m.DataConnectivityPage)
  },
  {
    path: 'rgupta',
    loadComponent: () => import('./pages/rajgupta/rajgupta.page').then(m => m.RajGuptaPage)  // Changed from RajguptaPage to RajGuptaPage
  },
  {
    path: 'glamphere',
    loadComponent: () => import('./pages/gilbert/gilbert.page').then(m => m.GilbertPage)
  },
  {
    path: 'aweinstein',
    loadComponent: () => import('./pages/alex/alex.page').then( m => m.AlexPage)
  },
  {
    path: 'bsamuels',
    loadComponent: () => import('./pages/ben/ben.page').then( m => m.BenPage)
  },
  {
    path: 'rworkman',
    loadComponent: () => import('./pages/rodney/rodney.page').then( m => m.RodneyPage)
  },
  {
    path: 'legal',
    loadComponent: () => import('./pages/legal/legal.page').then(m => m.LegalPage)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.page').then(m => m.PrivacyPage)
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.page').then(m => m.TermsPage)
  }
];
 