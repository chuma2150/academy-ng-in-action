import { ListModule } from './../list/list.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ComponentsModule } from '../../components/components.module';
import { SettingsComponent } from './settings/settings.component';
import { ReactiveSettingsComponent } from './reactive-settings';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    ComponentsModule,
    ListModule,
    ProfileRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  declarations: [ProfileComponent, SettingsComponent, ReactiveSettingsComponent],
})
export class ProfileModule { }
