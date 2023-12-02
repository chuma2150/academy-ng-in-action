import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {

  constructor(private sanitizer: DomSanitizer) { }

  @Input() size: 'large' | 'small' = 'large';
  @Input() name: string;

  get url(): SafeStyle {
    const avatar = `url(https://avatars.dicebear.com/api/human/${encodeURIComponent(this.name)}.svg)`;
    return this.sanitizer.bypassSecurityTrustStyle(avatar);
  }
}
