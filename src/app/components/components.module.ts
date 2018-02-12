import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboardComponent } from './chatboard/chatboard.component';
import { ChatmessageComponent } from './chatmessage/chatmessage.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserComponent } from './user/user.component';

const comps = [ChatboardComponent, ChatmessageComponent, AvatarComponent, UserComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: comps,
  exports: comps
})
export class ComponentsModule { }
