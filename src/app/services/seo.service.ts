import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  updateSEO(data: SEOData): void {
    // Update title
    this.title.setTitle(data.title);

    // Update meta description
    this.meta.updateTag({ name: 'description', content: data.description });

    // Update keywords if provided
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Update canonical URL
    if (data.url) {
      this.meta.updateTag({ rel: 'canonical', href: data.url });
    }

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: data.type || 'website' });
    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
    }
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
    }

    // Update Twitter Card tags
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    if (data.image) {
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    }

    // Add structured data if provided
    if (data.structuredData) {
      this.addStructuredData(data.structuredData);
    }
  }

  addStructuredData(data: any): void {
    // Remove existing structured data script
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  addBreadcrumbStructuredData(breadcrumbs: BreadcrumbItem[]): void {
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    this.addStructuredData(breadcrumbStructuredData);
  }

  setDefaultSEO(): void {
    const defaultData: SEOData = {
      title: 'MidInfra Capital Partners - Next-Generation Infrastructure Asset Management',
      description: 'MidInfra Capital Partners is a next-generation infrastructure asset management company, deploying $1+ billion in rail and infrastructure assets. Expert rail, ports, and data connectivity solutions.',
      keywords: 'infrastructure asset management, rail infrastructure, ports, data connectivity, infrastructure investment, rail parks, commodity logistics, MidInfra Capital Partners',
      url: 'https://midinfra.com',
      type: 'website',
      image: 'https://midinfra.com/assets/midlogo.png'
    };
    this.updateSEO(defaultData);
  }
}
