import { ApplicationConfig, provideZoneChangeDetection, } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// import { ProductFormComponent } from './product-form/product-form.component'; // Adjust the path as needed


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};
