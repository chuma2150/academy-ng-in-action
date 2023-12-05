import { ChatService, Message, User, UserService } from 'src/app/services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  public text: string;
  public message: Message;

  public user?: User;
  private subscription: Subscription;
  private receiver?: User;

  constructor(private userService: UserService, private chat: ChatService) {
  }

  ngOnInit() {
    this.subscription = this.userService.user().subscribe(user => this.user = user);
    // init the message field
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public send() {
    this.message = { text: this.text, sender: this.user?.name ?? '', receiver: this.receiver?.name, date: new Date() };
    this.reset();
    this.sendMessage(this.message);
  }

  public selectReceiver(user: User | undefined) {
    this.receiver = user;
  }

  private sendMessage(message: Message) {
    this.chat.add(message);
  }

  private reset() {
    this.text = '';
  }
}
