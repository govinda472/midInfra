# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **MidRail** application built with **Ionic Angular** (standalone components) and **Capacitor** for mobile deployment. It's a corporate website/app for a rail infrastructure company showcasing their services, team members, and company information.

## Technology Stack

- **Angular 18** with standalone components
- **Ionic 8** for mobile-first UI components
- **Capacitor 6** for native mobile app capabilities
- **TypeScript** with strict mode
- **SCSS** for styling
- **Karma/Jasmine** for testing
- **ESLint** for code linting

## Development Commands

### Core Development
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode for development
- `npm test` - Run unit tests with Karma
- `npm run lint` - Run ESLint on TypeScript and HTML files

### Angular CLI Commands
- `ng serve` - Development server (same as npm start)
- `ng build` - Build the project
- `ng test` - Run tests
- `ng lint` - Lint code

## Architecture

### Project Structure
```
src/app/
├── components/          # Reusable UI components
│   ├── about/          # About section component
│   ├── aboutus2/       # Secondary about component
│   ├── contact-us/     # Contact form component
│   ├── landing/        # Landing page component
│   ├── strategy/       # Strategy section component
│   └── teams/          # Team showcase component
├── pages/              # Route-based page components
│   ├── home/           # Main homepage
│   ├── approach/       # Company approach page
│   ├── history/        # Company history page
│   ├── [service-pages]/ # Various service pages (industrial-rail, ports, etc.)
│   ├── [team-pages]/   # Individual team member pages (alex, ben, gilbert, etc.)
│   └── [legal-pages]/  # Legal, privacy, terms pages
└── services/           # Angular services
    ├── navigate.service.ts    # Scroll navigation service
    └── show/
        └── showlogo.service.ts # Logo visibility service
```

### Key Architectural Patterns

1. **Standalone Components**: All components use Angular's standalone component architecture
2. **Lazy Loading**: All routes use lazy loading with `loadComponent()` 
3. **Service-Based State**: Simple services manage app state (navigation, UI state)
4. **Mobile-First Design**: Built with Ionic components for responsive, mobile-friendly UI

### Routing
- Routes are defined in `src/app/app.routes.ts`
- All routes use lazy loading with `loadComponent()` for performance
- Default route redirects to `/home`
- Individual team member pages use specific path patterns:
  - `/rgupta` → Raj Gupta page
  - `/glamphere` → Gilbert Lamphere page  
  - `/aweinstein` → Alex Weinstein page
  - `/bsamuels` → Ben Samuels page
  - `/rworkman` → Rodney Workman page

### Services
- `NavigateService`: Manages scroll-based navigation using RxJS Subjects
- `ShowlogoService`: Controls logo visibility state across components

## Build Configuration

- **Output Directory**: `www/` (configured for Capacitor)
- **Bundle Budgets**: 4MB warning, 6MB error for initial bundle
- **Style Budget**: 150KB warning, 200KB error per component
- **Environments**: Uses `environment.ts` for dev, `environment.prod.ts` for production

## Testing

- **Framework**: Karma + Jasmine
- **Configuration**: `karma.conf.js`
- **Test Files**: `*.spec.ts` files alongside components
- **Coverage**: Available via Karma coverage reporter

## Mobile Development

- **Capacitor Config**: `capacitor.config.ts`
- **App ID**: `io.ionic.starter`
- **Web Directory**: `www/`
- **Platform Support**: Configured for iOS/Android deployment

## Code Style

- **ESLint**: Configured with Angular ESLint rules
- **TypeScript**: Strict mode enabled
- **Styling**: SCSS with Ionic theming in `src/theme/variables.scss`
- **Component Structure**: Each component has `.ts`, `.html`, `.scss`, and `.spec.ts` files