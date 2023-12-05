import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { HairColors, User, UserService } from 'src/app/services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  public currentProfile$: Observable<User>;
  public availableHairColors = HairColors;

  userServiceSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.currentProfile$ = this.route.data.pipe(
      pluck('user'),
      map(u => ({ ...u })),
    );
  }

  save(updatedProfile: User): void {
    this.userServiceSubscription = this.userService
      .update(updatedProfile)
      .subscribe({
        complete: () => this.snackbar.open('User updated!', undefined, { duration: 5000 }),
        error: error => this.snackbar.open(`Update failed: ${error}`, undefined, { duration: 5000 }),
      });
  }

  ngOnDestroy(): void {
    this.userServiceSubscription?.unsubscribe();
  }
}
