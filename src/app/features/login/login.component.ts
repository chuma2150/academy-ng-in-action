import {User, UserService} from './../../services/user/user.service';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public name: string | null;

  constructor(private router: Router,
              private user: UserService,
              public snackBar: MatSnackBar) {
    this.user.user().pipe(first()).subscribe(currentUser => {
      if (currentUser) {
        this.navigate();
      }
    });
  }

  register() {
    const user: User = { name: this.name ?? '' };
    this.user.add(user)
      .subscribe({
        complete: () => this.navigate(),
        error: error => {
          this.showError(`User could not be added: ${error}`);
          this.name = null;
        },
      });
  }

  login(user: User | null) {
    this.user.set(user);
    this.navigate();
  }

  update(user: User) {
    const newUser: User = {...user, firstName: 'John', lastName: 'Doe'};
    this.user.update(newUser).subscribe( (hallo) => console.log('result of the update', hallo) , (error) => console.error(error));
    this.navigate();
  }

  showError(error: string) {
    this.snackBar.open(error, undefined, { duration: 5000 });
  }

  private navigate() {
    this.router.navigate(['/chat']);
  }
}
