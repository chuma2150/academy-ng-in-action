import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    FeaturesModule,
    MatToolbarModule,
    ComponentsModule,
    HttpClientModule,
    MatNativeDateModule,
    StoreModule.forRoot({ user: userReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
