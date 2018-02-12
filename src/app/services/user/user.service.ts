import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface User {
  name: string;
}

@Injectable()
export class UserService {
  private collection: AngularFirestoreCollection<User>;
  public user: User;

  constructor(private db: AngularFirestore) {
    this.collection = db.collection<User>('user', ref => ref.orderBy('name'));
   }

  public set(user: User) {
    this.user = user;
    this.collection.add(user);
  }

  public list() {
    return this.collection.valueChanges();
  }
}
