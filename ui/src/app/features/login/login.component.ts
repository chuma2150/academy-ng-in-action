import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';
import { User, UserService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public name: string | null;

  constructor(private router: Router,
    private user: UserService,
    public snackBar: MatSnackBar) {
    this.user.user().pipe(first()).subscribe(async currentUser => {
      if (currentUser) {
        await this.navigate();
      }
    });
  }

  async register() {
    const user: User = { name: this.name ?? '' };
    try {
      await this.user.add(user);
      await this.login(user);
    } catch (error) {
      this.showError(`User could not be added: ${error}`);
    }
  }

  async login(user: User | undefined) {
    this.user.set(user);
    await this.navigate();
  }

  showError(error: string) {
    this.snackBar.open(error, undefined, { duration: 5000 });
  }

  private async navigate() {
    await this.router.navigate(['/chat']);
  }
}
