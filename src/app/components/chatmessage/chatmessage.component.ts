import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.component.html',
  styleUrls: ['./chatmessage.component.scss']
})
export class ChatmessageComponent implements OnInit {
  @Input() message: any;
  @Input() current: string;

  constructor() { }

  ngOnInit() {
  }

}
