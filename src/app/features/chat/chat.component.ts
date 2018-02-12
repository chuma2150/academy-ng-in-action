import { ChatServiceService } from './../../services/chat-service/chat-service.service';
import { User, UserService } from './../../services/user/user.service';
import { Message } from './../../services/chat-service/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public text: string;
  public msg: Message;

  constructor(private user: UserService, private chat: ChatServiceService) { }

  ngOnInit() {
      // init the message field
  }

  public send() {
    this.msg = {text: this.text, sender: 'Test'};

    this.sendMessage(this.msg);
  }

  public reset(){
    this.chat.init();
  }

  private sendMessage(message: Message) {
    this.chat.add(message);
  }

}
