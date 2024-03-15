import { Component, OnDestroy, OnInit, Signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HairColor, HairColors, User, UserService } from 'src/app/services';
import { AgePipe } from 'src/app/components/profile-view';

@Component({
  selector: 'app-reactive-settings',
  templateUrl: './reactive-settings.component.html',
  styleUrls: ['./reactive-settings.component.scss'],
})
export class ReactiveSettingsComponent implements OnInit, OnDestroy {
  public readonly availableHairColors = HairColors;
  public profileForm: FormGroup;
  public calcAge: Signal<string>;

  private currentProfile$: Observable<User>;
  private userServiceSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private snackbar: MatSnackBar,
    formBuilder: FormBuilder) {
    this.profileForm = formBuilder.group({
      name: new FormControl<string>('', [Validators.required]),
      firstName: new FormControl<string | null>(null),
      lastName: new FormControl<string | null>(null),
      birthDate: new FormControl<Date | null>(null),
      hairColor: new FormControl<HairColor>(HairColors[0]),
    });

    const birthDate$ = this.profileForm.controls.birthDate.valueChanges;
    const birthDateSignal = toSignal(birthDate$, { initialValue: new Date() });
    const agePipe = new AgePipe();

    this.calcAge = computed(() => {
      const currentValue = birthDateSignal();
      return agePipe.transform(currentValue);
    });
  }

  ngOnInit(): void {
    this.currentProfile$ = this.route.data.pipe(
      map(data => data['user']),
      map(u => ({ ...u })),
    );

    this.currentProfile$.pipe(take(1)).subscribe(profile => {
      this.profileForm.patchValue(profile);
    });
  }

  save(): void {
    this.userServiceSubscription = this.userService
      .update(this.profileForm.value)
      .subscribe({
        complete: () => this.snackbar.open('User updated!', undefined, { duration: 5000 }),
        error: error => this.snackbar.open(`Update failed: ${error}`, undefined, { duration: 5000 }),
      });
  }

  ngOnDestroy(): void {
    this.userServiceSubscription?.unsubscribe();
  }
}
