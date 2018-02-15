import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  private _url: string;

  @Input()
  set url(url: string){
    this._url = url;
  }

  get url(){
    return `url(${this._url})`;
  }
}
