import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { UserService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class HasUserGuard  {
  constructor(private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.userService.user().pipe(first(), map(user => !!user));
  }
}
