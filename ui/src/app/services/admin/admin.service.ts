import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user';
import { ChatService } from '../chat';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private readonly userService: UserService, private readonly chatService: ChatService) { }

  user(): Subscription {
    return this.userService
      .list()
      .subscribe(console.log);
  }

  message(): Subscription {
    return this.chatService
      .list()
      .subscribe(console.log);
  }
}
