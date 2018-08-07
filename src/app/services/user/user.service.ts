import {Observable, BehaviorSubject, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface User {
  id?: string;
  name: string;
  firstName?: string;
  lastName?: string;
}

const USER_ENDPOINT = 'https://us-central1-ng-in-action.cloudfunctions.net/user/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
  private user$: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  public set(user: User) {
    this.user$.next(user);
  }

  public update(user: User) {
    const newUser = {...user};
    delete  newUser['id'];

    return this.http
      .patch(`${USER_ENDPOINT}${user.id}`, newUser, httpOptions)
      .pipe(tap((_) => this.set(user)));
  }

  public add(user: User): Observable<any> {
    return this.http
      .post(USER_ENDPOINT, user, httpOptions)
      .pipe(tap((_) => this.set(user)));
  }

  public list(): Observable<User[]> {
    return this.http.get<User[]>(USER_ENDPOINT);
  }

  public user(): Observable<User> {
    return this.user$.asObservable();
  }

}
