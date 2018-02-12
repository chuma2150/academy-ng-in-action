import { ChatServiceService } from './../../services/chat-service/chat-service.service';
import { User, UserService } from './../../services/user/user.service';
import { Message } from './../../services/chat-service/message';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  public text: string;
  public msg: Message;

  private user: User;
  private subscription: Subscription;
  private receiver: User;

  constructor(private userService: UserService, private chat: ChatServiceService) { }

  ngOnInit() {
    this.subscription = this.userService.user().subscribe(user => this.user = user);
      // init the message field
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public send() {
    this.msg = {text: this.text, sender: this.user.name};

    this.sendMessage(this.msg);
  }

  public reset() {
    this.chat.reset().subscribe();
  }

  public selectReceiver(user: User) {
      this.receiver = user;
  }

  private sendMessage(message: Message) {
    this.chat.add(message);
  }
}
