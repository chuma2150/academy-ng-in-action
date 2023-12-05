import { Component, Input } from '@angular/core';
import { User } from '../../services/user/user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent {
  @Input() user: User;
}
