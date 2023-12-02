import { User } from './../../services/user/user.service';
import { ChatService } from '../../services/chat/chat.service';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../services/chat/message';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.scss']
})
export class ChatboardComponent implements OnInit {
  @Input() user: User | null = null;
  public messages: Promise<Message[]>;

  constructor(public service: ChatService) { }

  ngOnInit() {
    this.messages = this.service.messages(this.user);
  }
}
