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
  alternateUrls?: { [key: string]: string };
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  locale?: string;
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

    // Update author if provided
    if (data.author) {
      this.meta.updateTag({ name: 'author', content: data.author });
    }

    // Update robots meta tag for better crawling
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' });

    // Update canonical URL
    if (data.url) {
      this.meta.updateTag({ rel: 'canonical', href: data.url });
    }

    // Update locale
    this.meta.updateTag({ name: 'language', content: data.locale || 'en-US' });
    this.meta.updateTag({ 'http-equiv': 'content-language', content: data.locale || 'en-US' });

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: data.type || 'website' });
    this.meta.updateTag({ property: 'og:locale', content: data.locale || 'en_US' });
    this.meta.updateTag({ property: 'og:site_name', content: 'MidInfra Capital Partners' });
    
    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
    }
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
      this.meta.updateTag({ property: 'og:image:width', content: '1200' });
      this.meta.updateTag({ property: 'og:image:height', content: '630' });
      this.meta.updateTag({ property: 'og:image:alt', content: data.title });
      this.meta.updateTag({ property: 'og:image:type', content: 'image/png' });
    }
    if (data.publishedTime) {
      this.meta.updateTag({ property: 'article:published_time', content: data.publishedTime });
    }
    if (data.modifiedTime) {
      this.meta.updateTag({ property: 'article:modified_time', content: data.modifiedTime });
    }
    if (data.author) {
      this.meta.updateTag({ property: 'article:author', content: data.author });
    }
    if (data.section) {
      this.meta.updateTag({ property: 'article:section', content: data.section });
    }

    // Update Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:site', content: '@midinfra' });
    this.meta.updateTag({ name: 'twitter:creator', content: '@midinfra' });
    if (data.image) {
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
      this.meta.updateTag({ name: 'twitter:image:alt', content: data.title });
    }

    // Add LinkedIn specific tags
    this.meta.updateTag({ name: 'linkedin:owner', content: 'https://www.linkedin.com/company/midinfra-capital-partners-llc/' });

    // Add hreflang tags for alternate URLs
    if (data.alternateUrls) {
      Object.keys(data.alternateUrls).forEach(lang => {
        this.meta.updateTag({ 
          rel: 'alternate', 
          hreflang: lang, 
          href: data.alternateUrls![lang] 
        });
      });
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

  addOrganizationStructuredData(): void {
    const organizationData = {
      "@context": "https://schema.org",
      "@type": ["Organization", "InvestmentFund", "FinancialService"],
      "name": "MidInfra Capital Partners",
      "alternateName": "MidInfra",
      "description": "Next-generation infrastructure asset management company with a deep passion for transportation and digital infrastructure. We focus on asset-intensive segments including railroads, ports, terminals, data centers and wireless communications.",
      "url": "https://midinfra.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://midinfra.com/assets/midlogo.png",
        "width": 1200,
        "height": 630
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://midinfra.com/assets/midlogo.png",
        "width": 1200,
        "height": 630
      },
      "sameAs": [
        "https://www.linkedin.com/company/midinfra-capital-partners-llc/"
      ],
      "contactPoint": [{
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://midinfra.com/contact",
        "availableLanguage": "English"
      }],
      "address": [{
        "@type": "PostalAddress",
        "addressLocality": "La Jolla",
        "addressRegion": "California",
        "addressCountry": "US",
        "name": "La Jolla Office"
      }, {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "New York",
        "addressCountry": "US",
        "name": "New York Office"
      }],
      "foundingDate": "1985",
      "numberOfEmployees": "2-10",
      "industry": "Investment Management",
      "naics": "523999",
      "knowsAbout": [
        "private equity",
        "infrastructure investing", 
        "asset management",
        "freight railroads",
        "ports",
        "terminals", 
        "data centers",
        "wireless communications",
        "rail infrastructure",
        "maritime logistics",
        "commodity transportation",
        "industrial rail solutions"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Infrastructure Investment Services",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rail Infrastructure Investment",
            "description": "Investment and management of rail infrastructure assets including industrial rail, rail parks, and freight rail connectivity."
          }
        }, {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Port and Terminal Investment",
            "description": "Strategic investment in port and marine terminal infrastructure for maritime logistics and cargo handling."
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Data Connectivity Infrastructure",
            "description": "Investment in data centers and digital infrastructure supporting modern connectivity needs."
          }
        }]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "29",
        "bestRating": "5"
      }
    };

    this.addStructuredData(organizationData);
  }

  addFinancialServiceStructuredData(): void {
    const financialServiceData = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "MidInfra Capital Partners - Infrastructure Investment Management",
      "description": "Specialized infrastructure asset management with focus on transportation and digital infrastructure investments.",
      "provider": {
        "@type": "Organization",
        "name": "MidInfra Capital Partners"
      },
      "serviceType": "Infrastructure Investment Management",
      "areaServed": {
        "@type": "Country", 
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Infrastructure Investment Services",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "InvestmentOrDeposit",
            "name": "Infrastructure Private Equity Fund",
            "description": "Private equity investment focused on rail, port, and digital infrastructure assets."
          }
        }]
      }
    };

    this.addStructuredData(financialServiceData);
  }

  addWebsiteStructuredData(): void {
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "MidInfra Capital Partners",
      "alternateName": "MidInfra",
      "url": "https://midinfra.com",
      "description": "Next-generation infrastructure asset management company specializing in rail, ports, and data connectivity investments.",
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "publisher": {
        "@type": "Organization",
        "name": "MidInfra Capital Partners",
        "logo": {
          "@type": "ImageObject",
          "url": "https://midinfra.com/assets/midlogo.png"
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://midinfra.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };

    this.addStructuredData(websiteData);
  }

  setDefaultSEO(): void {
    const defaultData: SEOData = {
      title: 'MidInfra Capital Partners - Next-Generation Infrastructure Asset Management',
      description: 'MidInfra Capital Partners is a next-generation infrastructure asset management company with nearly 40 years track record. We deploy $1+ billion in rail, ports, terminals, data centers and wireless infrastructure assets, creating platform companies and generating $40+ billion in value.',
      keywords: 'infrastructure asset management, private equity, rail infrastructure, ports investment, data connectivity, infrastructure fund, freight railroads, terminals, wireless communications, MidInfra Capital Partners, La Jolla investment firm',
      url: 'https://midinfra.com',
      type: 'website',
      image: 'https://midinfra.com/assets/midlogo.png',
      author: 'MidInfra Capital Partners',
      locale: 'en-US',
      modifiedTime: new Date().toISOString()
    };
    this.updateSEO(defaultData);
    
    // Add comprehensive structured data
    this.addOrganizationStructuredData();
    this.addWebsiteStructuredData();
    this.addFinancialServiceStructuredData();
  }
}
