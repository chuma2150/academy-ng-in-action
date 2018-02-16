import { User } from './../../services/user/user.service';
import { ChatService } from '../../services/chat/chat.service';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../services/chat/message';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.scss']
})
export class ChatboardComponent implements OnInit {
  @Input() user: User = null;
  @Input() ownMessages: boolean;
  public msgs: Observable<Message[]>;

  constructor(public service: ChatService) {}

  ngOnInit() {
    this.msgs = this.service.messages( this.ownMessages ? this.user : null);
  }

}
