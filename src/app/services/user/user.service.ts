import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface User {
  name: string;
}

@Injectable()
export class UserService {
  public user: User;
  private collection: AngularFirestoreCollection<User>;
  private _users: Observable<User[]>;

  constructor(private db: AngularFirestore) {
    this.collection = db.collection<User>('user', ref => ref.orderBy('name'));
    this._users = this.collection.valueChanges();
   }

  public set(user: User) {
    this.user = user;
  }

  public list() {
    return this._users;
  }
}
