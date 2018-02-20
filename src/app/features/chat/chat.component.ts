import {ChatService} from '../../services/chat/chat.service';
import {User, UserService} from './../../services/user/user.service';
import {Message} from '../../services/chat/message';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  public text: string;
  public msg: Message;

  public user: User;
  private subscription: Subscription;
  private receiver: User = null;

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
    this.msg = {text: this.text, sender: this.user.name, receiver: this.receiver && this.receiver.name};
    this.reset();
    this.sendMessage(this.msg);
  }

  public selectReceiver(user: User) {
    this.receiver = user;
  }

  private sendMessage(message: Message) {
    this.chat.add(message);
  }

  private reset() {
    this.text = '';
  }
}
