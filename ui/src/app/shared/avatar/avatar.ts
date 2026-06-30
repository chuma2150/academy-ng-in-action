import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Avatar as DicebearAvatar, Style } from '@dicebear/core';
import personas from '@dicebear/styles/personas.json' with { type: 'json' };

const style = new Style(personas);

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.html',
  styleUrls: ['./avatar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Avatar {
  private readonly sanitizer = inject(DomSanitizer);

  readonly small = input(false);
  readonly name = input.required<string>();

  readonly url = computed(() => {
    const avatar = new DicebearAvatar(style, {
      seed: this.name(),
    });

    return this.sanitizer.bypassSecurityTrustUrl(avatar.toDataUri());
  });
}
