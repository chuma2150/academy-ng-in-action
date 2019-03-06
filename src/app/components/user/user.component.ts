import {Observable} from 'rxjs';
import {User, UserService} from './../../services/user/user.service';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: Observable<User>;

  constructor(private router: Router, private userService: UserService) {
    this.user = this.userService.user();
  }

  public logout() {
    this.userService.unset();
    this.navigate();
  }

  private navigate(): void {
    this.router.navigate(['/login']);
  }
}
