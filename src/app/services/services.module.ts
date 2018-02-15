import { UserService } from './user/user.service';
import { ChatService } from './chat/chat.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [ChatService, UserService]
})
export class ServicesModule { }
