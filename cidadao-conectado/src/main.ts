// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PagesModule } from './app/pages/pages.module'; // Import PagesModule

platformBrowserDynamic().bootstrapModule(PagesModule)
  .catch(err => console.error(err));
