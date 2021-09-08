import {Observable, BehaviorSubject, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

export const HairColors = ['', 'black', 'blonde', 'red', 'darkbrown'] as const;
export type HairColor = typeof HairColors[number];

export interface UserDto {
  id?: string;
  name: string;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  hairColor?: HairColor;
}

export interface User {
  id?: string;
  name: string;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  hairColor?: HairColor;
}

const USERS_ENDPOINT = 'https://us-central1-ng-in-action-2.cloudfunctions.net/users';
const USER_ENDPOINT = 'https://us-central1-ng-in-action-2.cloudfunctions.net/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser && currentUser !== 'null') {
      const parsedUser = JSON.parse(currentUser);
      this.set({ ...parsedUser, birthDate: parsedUser.birthDate ? new Date(parsedUser.birthDate) : undefined });
    }
  }

  public set(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.user$.next(user);
  }

  public unset() {
    localStorage.clear();
    this.set(null);
  }

  public update(user: User) {
    return this.http
      .patch(USER_ENDPOINT, { ...user, birthDate: user.birthDate?.toISOString() }, httpOptions)
      .pipe(tap((_) => this.set(user)));
  }

  public add(user: User): Observable<any> {
    return this.http
      .post(USER_ENDPOINT, { ...user, birthDate: user.birthDate?.toISOString() }, httpOptions)
      .pipe(tap((retrievedUser) => this.set(retrievedUser)));
  }

  public list(): Observable<User[]> {
    return this.http.get<UserDto[]>(USERS_ENDPOINT).pipe(map(users => users.map(u => ({ ...u, birthDate: u.birthDate ? new Date(u.birthDate): undefined }))));
  }

  public user(): Observable<User> {
    return this.user$.asObservable();
  }

}
