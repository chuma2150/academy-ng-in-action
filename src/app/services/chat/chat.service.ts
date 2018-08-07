import {User} from './../user/user.service';
import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Message} from './message';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {HttpClient} from '@angular/common/http';

const MESSAGE_ENDPOINT = 'https://us-central1-ng-in-action.cloudfunctions.net/messages/';

@Injectable()
export class ChatService {
  private collection: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.collection = db.collection<Message>('messages');
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
      .pipe(map(messagesByCollection => [].concat(...messagesByCollection)
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
