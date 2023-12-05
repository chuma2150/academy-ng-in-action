import { Component, Input } from '@angular/core';
import { Message, User } from 'src/app/services';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.component.html',
  styleUrls: ['./chatmessage.component.scss'],
})
export class ChatmessageComponent {
  @Input() message: Message;
  @Input() current: User | undefined;
}
