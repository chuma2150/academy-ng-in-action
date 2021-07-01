import { User } from './../user/user.service';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from './message';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

const MESSAGE_ENDPOINT = 'https://us-central1-ng-in-action.cloudfunctions.net/messages/';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private db: AngularFirestore, private http: HttpClient) {
    db.collection<Message>('messages');
  }

  public messages(user: User): Observable<Message[]> {
    const senderCollection = this.db.collection<Message>('messages', ref => ref
      .where('sender', '==', user.name));

    const receiverCollection = this.db.collection<Message>('messages', ref => ref
      .where('receiver', '==', user.name));

    const publicCollection1 = this.db.collection<Message>('messages', ref => ref
      .where('receiver', '==', null)
      .where('sender', '<', user.name));

    const publicCollection2 = this.db.collection<Message>('messages', ref => ref
      .where('receiver', '==', null)
      .where('sender', '>', user.name));

    const collections = [senderCollection, receiverCollection, publicCollection1, publicCollection2];
    return combineLatest(collections.map(c => c.valueChanges()))
      .pipe(
        map(messagesByCollection => [].concat(...messagesByCollection)
        .map(message => {
          return {...message, date: new Date(((message.date as any).seconds * 1000))};
        })
        .sort((message1: Message, message2: Message) =>
          message1.date.valueOf() - message2.date.valueOf())));
  }

  public add(message: Message) {
    this.http
      .post(MESSAGE_ENDPOINT, {...message, date: new Date()})
      .subscribe((response) => {
          console.log('CharServiceService.add', message , 'id ', response);
      });
  }
}
