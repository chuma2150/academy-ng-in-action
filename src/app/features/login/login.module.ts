import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ListModule} from './../list/list.module';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ListModule,
    ComponentsModule,
    MatCardModule,
    MatSnackBarModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
