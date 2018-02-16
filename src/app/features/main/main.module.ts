import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
