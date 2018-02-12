import { ListModule } from './../list/list.module';
import { FeaturesModule } from './../features.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    ComponentsModule,
    FormsModule,
    ListModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
