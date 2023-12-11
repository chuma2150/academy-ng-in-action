import { ChatService, Message, User, UserService } from 'src/app/services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  text: string;
  message: Message;

  user?: User;
  subscription: Subscription;
  receiver?: User;

  constructor(private userService: UserService, private chat: ChatService) { }

  ngOnInit() {
    this.subscription = this.userService
      .user()
      .subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  send() {
    this.message = {
      text: this.text,
      sender: this.user?.name ?? '',
      receiver: this.receiver?.name,
      date: new Date(),
    };

    this.reset();
    this.sendMessage(this.message);
  }

  selectReceiver(user: User | undefined) {
    this.receiver = user;
  }

  private sendMessage(message: Message) {
    this.chat
      .add(message)
      .subscribe();
  }

  private reset() {
    this.text = '';
  }
}
