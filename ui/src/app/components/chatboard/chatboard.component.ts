import { Component, OnInit, Input } from '@angular/core';
import { ChatService, Message, User } from 'src/app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.scss'],
})
export class ChatboardComponent implements OnInit {
  @Input() user: User | undefined;
  messages: Observable<Message[]>;

  constructor(private service: ChatService) { }

  ngOnInit() {
    this.messages = this.service.messages(this.user);
  }
}
