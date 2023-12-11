import { Observable, BehaviorSubject, Subject, tap, map, switchMap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';

const USER_ENDPOINT = `${environment.endpoint}/users`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$: Subject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

  constructor(private readonly http: HttpClient) {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser && currentUser !== 'undefined') {
      this.set(this.mapUser(JSON.parse(currentUser)));
    }
  }

  public set(user: User | undefined) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.user$.next(user);
  }

  public unset() {
    localStorage.clear();
    this.set(undefined);
  }

  public add(user: User): Observable<User> {
    return this
      .userExists(user)
      .pipe(switchMap(exists => exists
        ? throwError(() => new Error(`User '${user.name}' already exists.`))
        : this.http
          .post<User>(USER_ENDPOINT, user)
          .pipe(tap(({ id }) => this.set({ ...user, id }))),
      ));
  }

  // Exercise 4: Add update function here.

  public list(): Observable<User[]> {
    return this.http
      .get<User[]>(USER_ENDPOINT)
      .pipe(map(users => users.map(this.mapUser)));
  }

  public user(): Observable<User | undefined> {
    return this.user$.asObservable();
  }

  private mapUser(user: User): User {
    return { ...user, birthDate: user.birthDate ? new Date(user.birthDate) : undefined };
  }

  private userExists(user: User): Observable<boolean> {
    return this.list()
      .pipe(map(users => users.some(u => u.name.toUpperCase() === user.name.toUpperCase())));
  }
}
