import { ListModule } from './../list/list.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {MatFormField, MatButton, MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule} from '@angular/material';
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
    MatCardModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
