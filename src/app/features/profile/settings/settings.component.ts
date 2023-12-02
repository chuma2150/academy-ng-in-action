import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { HairColors, User, UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  public currentProfile$: Observable<User>;
  public availableHairColors = HairColors;

  constructor(private route: ActivatedRoute, private userService: UserService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.currentProfile$ = this.route.data.pipe(
      pluck('user'),
      map(u => ({ ...u })),
    );
  }

  async save(updatedProfile: User): Promise<void> {
    try {
      await this.userService.update(updatedProfile);
      this.snackbar.open('User updated!', undefined, { duration: 5000 });
    } catch (error) {
      this.snackbar.open(`Update failed: ${error}`, undefined, { duration: 5000 });
    }
  }
}
