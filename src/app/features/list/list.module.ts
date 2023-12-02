import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { MatListModule } from '@angular/material/list';
import { ComponentsModule } from '../../components/components.module';
import { FilterUserPipe } from '../../pipe/filter-user.pipe';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    MatListModule,
    ComponentsModule
  ],
  declarations: [
    ListComponent,
    FilterUserPipe
  ],
  exports: [ListComponent]
})
export class ListModule { }
