import {User, UserService} from './../../services/user/user.service';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public name: string;

  constructor(private router: Router,
              private user: UserService,
              public snackBar: MatSnackBar) {
  }

  register() {
    const user: User = {name: this.name};
    this.user.add(user)
      .subscribe(
        (response) => this.navigate(),
        (error) => {
          this.showError(`User ${this.name} exists already!!`);
          this.name = null;
        });
  }

  login(user: User) {
    this.user.set(user);
    this.navigate();
  }

  showError(error: string) {
    this.snackBar.open(error, null, {duration: 5000});
  }

  private navigate() {
    this.router.navigate(['/chat']);
  }
}
