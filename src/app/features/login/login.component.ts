import {User, UserService} from './../../services/user/user.service';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public name: string;

  constructor(private router: Router,
              private user: UserService,
              public snackBar: MatSnackBar) {
    this.user.user().subscribe(currentUser => {
      if (currentUser) {
        this.navigate();
      }
    });
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

  update(user: User) {
    const newUser: User = {...user, firstName: 'John', lastName: 'Doe'};
    this.user.update(newUser).subscribe( (hallo) => console.log('result of the update', hallo) , (error) => console.error(error));
    this.navigate();
  }

  showError(error: string) {
    this.snackBar.open(error, null, {duration: 5000});
  }

  private navigate() {
    this.router.navigate(['/chat']);
  }
}
