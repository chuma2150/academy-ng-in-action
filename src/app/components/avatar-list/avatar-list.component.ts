import {Component, EventEmitter, OnInit, Output} from '@angular/core';


const avatars: string[] = [
  'https://api.adorable.io/avatars/48/1.png',
  'https://api.adorable.io/avatars/48/2.png',
  'https://api.adorable.io/avatars/48/3.png',
  'https://api.adorable.io/avatars/48/4.png',
  'https://api.adorable.io/avatars/48/5.png',
  'https://api.adorable.io/avatars/48/6.png',
  'https://api.adorable.io/avatars/48/7.png',
  'https://api.adorable.io/avatars/48/8.png',
  'https://api.adorable.io/avatars/48/9.png',
  'https://api.adorable.io/avatars/48/10.png'
];

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.scss']
})
export class AvatarListComponent {
  public avatars: string[] = avatars;
  public selected: string;

  @Output() select: EventEmitter<string> = new EventEmitter<string>();
}
