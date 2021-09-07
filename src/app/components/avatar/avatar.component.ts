import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  private _name: string;
  public url: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {
  }

  @Input() size: 'large' | 'small' = 'large';

  @Input()
  set name(aName: string) {
    this._name = aName;
    const avatar = `url(https://api.adorable.io/avatars/human/${encodeURIComponent(this.name)}.svg)`;
    this.url = this.sanitizer.bypassSecurityTrustStyle(avatar);
  }

  get name() {
    return this._name;
  }
}
