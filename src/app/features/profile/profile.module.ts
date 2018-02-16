import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ListModule} from './../list/list.module';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ProfileRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ListModule,
    ComponentsModule,
    MatCardModule,
    MatSnackBarModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
