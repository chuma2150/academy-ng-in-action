import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/do';
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
  private collection: AngularFirestoreCollection<User>;
  // private user$: Subject<User> = new BehaviorSubject<User>({name: 'No user'});
  private user$: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.collection = db.collection<User>('user', ref => ref.orderBy('name'));
  }

  public set(user: User) {
    this.user$.next(user);
  }

  public update(user: User) {
    const newUser = {...user};
    delete  newUser['id'];

    return this.http
      .patch(`${USER_ENDPOINT}${user.id}`, newUser, httpOptions)
      .do((_) => this.set(user));
  }

  public add(user: User): Observable<any> {
    return this.http
      .post(USER_ENDPOINT, user, httpOptions)
      .do((_) => this.set(user));
  }

  public list(): Observable<User[]> {
    return this.http.get<User[]>(USER_ENDPOINT);
  }

  public user(): Observable<User> {
    return this.user$.asObservable();
  }

}
