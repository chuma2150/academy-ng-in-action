import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { defineTi8mCustomComponents } from './app/web-components/ti8m';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

defineTi8mCustomComponents();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
