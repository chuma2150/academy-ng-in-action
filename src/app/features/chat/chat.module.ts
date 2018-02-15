import {ListModule} from './../list/list.module';
import {ComponentsModule} from './../../components/components.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatRoutingModule} from './chat-routing.module';
import {ChatComponent} from './chat.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTabsModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    ComponentsModule,
    FormsModule,
    ListModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
