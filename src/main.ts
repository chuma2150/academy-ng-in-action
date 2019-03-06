import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {defineTi8mCustomComponents} from './app/web-components/ti8m';

if (environment.production) {
  enableProdMode();
}

defineTi8mCustomComponents();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
