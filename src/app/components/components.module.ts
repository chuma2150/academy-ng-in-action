import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { ChatmessageComponent } from './chatmessage/chatmessage.component';
import { AvatarComponent } from './avatar/avatar.component';

const comps = [ChatboardComponent, ChatmessageComponent, AvatarComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: comps,
  exports: comps
})
export class ComponentsModule { }
