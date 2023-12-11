import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { first } from 'rxjs/operators';
import { User, UserService } from 'src/app/services';

export const currentUserResolver: ResolveFn<User | undefined> = () => {
  const userService = inject(UserService);

  return userService.user().pipe(first());
};
