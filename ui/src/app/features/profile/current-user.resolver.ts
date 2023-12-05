import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { User, UserService } from 'src/app/services';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserResolver implements Resolve<User | undefined> {
  constructor(private userService: UserService) {
  }

  resolve(): Observable<User | undefined> {
    return this.userService.user().pipe(first());
  }
}
