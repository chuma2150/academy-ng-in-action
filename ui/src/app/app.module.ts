import { ComponentsModule } from './components/components.module';
<<<<<<< HEAD
=======
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> solution
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user';
=======
import { FeaturesModule } from './features';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
>>>>>>> solution

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    ComponentsModule,
    HttpClientModule,
    MatNativeDateModule,
<<<<<<< HEAD
    UserComponent,
    StoreModule.forRoot({ user: userReducer }),
=======
    StoreModule.forRoot({}),
>>>>>>> solution
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
