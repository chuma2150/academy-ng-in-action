import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    MatListModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule { }
