import {Component, Input} from '@angular/core';
import {User} from '../../services/user/user.service';
import {Router} from '@angular/router';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-profile-resovler',
  templateUrl: './profile-resolver.component.html',
  styleUrls: ['./profile-resolver.component.scss']
})
export class ProfileResolverComponent {
  @Input()
  public profile: User;

  constructor(private router: Router) {
  }

  selectProfile(user: User) {
    this.router.navigate(['profile-resolver', user.name]);
  }
}
