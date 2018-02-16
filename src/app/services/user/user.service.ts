import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/operators/take';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface User {
  name: string;
}

// const USER_ENDPOINT = '/assets/user.json';
const USER_ENDPOINT = 'https://us-central1-ng-in-action.cloudfunctions.net/user/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UserService {
  private collection: AngularFirestoreCollection<User>;
  // private user$: Subject<User> = new BehaviorSubject<User>({name: 'No user'});
  private user$: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.collection = db.collection<User>('user', ref => ref.orderBy('name'));
   }

  public set(user: User) {
    this.user$.next(user);
  }

  public add(user: User) {
    this.http
      .post(USER_ENDPOINT, user, httpOptions)
      .subscribe( (response) => this.set(user) );
    }

  public list(): Observable<User[]> {
    return this.collection.valueChanges();
  }

  public user(): Observable<User> {
    return this.user$.asObservable();
  }

}
