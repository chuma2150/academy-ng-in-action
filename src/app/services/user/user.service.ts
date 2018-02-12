import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

export interface User {
  name: string;
}

@Injectable()
export class UserService {
  private collection: AngularFirestoreCollection<User>;
  public user: User;

  constructor(private store: AngularFirestore) {
      this.collection = store.collection('user');
  }

  public set(user: User) {
    this.user = user;
    this.collection.add(user);
  }
}
