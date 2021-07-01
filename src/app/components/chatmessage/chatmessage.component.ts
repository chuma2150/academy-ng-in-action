import { Component, Input } from '@angular/core';
import {User} from '../../services/user/user.service';
import {Message} from '../../services/chat/message';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.component.html',
  styleUrls: ['./chatmessage.component.scss']
})
export class ChatmessageComponent {
  @Input() message: Message;
  @Input() current: User;
}
