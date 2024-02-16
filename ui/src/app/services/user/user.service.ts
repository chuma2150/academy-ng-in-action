import { Observable, tap, map, switchMap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, UserDto, mapUser } from './user';
import { Store } from '@ngrx/store';
import { setUser } from 'src/app/state/user/user.actions';
import { selectUser } from 'src/app/state/user/user.selectors';

const USER_ENDPOINT = `${environment.endpoint}/users`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient, private readonly store: Store) {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser && currentUser !== 'undefined') {
      this.set(mapUser(JSON.parse(currentUser)));
    }
  }

  set(user: User | undefined) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.store.dispatch(setUser({ user }));
  }

  unset() {
    localStorage.clear();
    this.set(undefined);
  }

  add(user: User): Observable<User> {
    return this
      .userExists(user)
      .pipe(switchMap(exists => exists
        ? throwError(() => new Error(`User '${user.name}' already exists.`))
        : this.http
          .post<UserDto>(USER_ENDPOINT, user)
          .pipe(
            tap(({ id }) => this.set({ ...user, id })),
            map(mapUser)),
      ));
  }

  update(user: User): Observable<void> {
    return this.http
      .put<void>(USER_ENDPOINT, user)
      .pipe(tap(() => this.set(user)));
  }

  list(): Observable<User[]> {
    return this.http
      .get<UserDto[]>(USER_ENDPOINT)
      .pipe(map(users => users.map(mapUser)));
  }

  user(): Observable<User | undefined> {
    return this.store.select(selectUser);
  }

  private userExists(user: User): Observable<boolean> {
    return this
      .list()
      .pipe(map(users => users.some(u => u.name.toUpperCase() === user.name.toUpperCase())));
  }
}
