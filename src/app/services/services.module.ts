import { UserService } from './user/user.service';
import { ChatServiceService } from './chat-service/chat-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ChatServiceService, UserService]
})
export class ServicesModule { }
