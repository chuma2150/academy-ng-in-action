import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { ChatService } from '../chat/chat.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private readonly userService: UserService, private readonly chatService: ChatService) { }

  async user() {
    const users = await this.userService.list()
    console.log(users);
  }

  async message() {
    const messages = await this.chatService.list()
    console.log(messages);
  }
}
