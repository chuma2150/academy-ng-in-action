import { ChatServiceService } from './../../services/chat-service/chat-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../services/chat-service/message';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.scss']
})
export class ChatboardComponent implements OnInit {
  @Input() messages: Message[];
  public msgs: Observable<Message[]>;

  constructor(public service: ChatServiceService) {
    this.msgs = service.messages();
   }

  ngOnInit() {
  }

}
