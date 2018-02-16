import {User} from './../user/user.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/defer';
import {Message} from './message';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {QueryDocumentSnapshot} from '@firebase/firestore-types';
import {HttpClient, HttpResponse} from '@angular/common/http';

const MESSAGE_ENDPOINT = 'https://us-central1-ng-in-action.cloudfunctions.net/messages/';

const dummy: Message[] = [
  {
    'text': 'Aliquip reprehenderit minim laborum do duis Lorem anim ad sint voluptate excepteur exercitation ea.',
    'sender': 'Mcdowell',
    'receiver': 'Ferguson'
  },
  {
    'text': 'Laboris qui nisi in ex duis ut occaecat sit.',
    'sender': 'Geraldine',
    'receiver': 'Valencia'
  },
  {
    'text': 'Cupidatat dolor nostrud ipsum et aute ut irure esse id ad.',
    'sender': 'Velez',
    'receiver': null
  },
  {
    'text': 'Et aute amet in sint enim occaecat duis ea esse id nostrud enim quis nostrud.',
    'sender': 'Rose',
    'receiver': null
  },
  {
    'text': 'Cupidatat nostrud sunt dolore laborum eu laborum occaecat excepteur.',
    'sender': 'Jayne',
    'receiver': 'Beasley'
  },
  {
    'text': 'Esse irure id deserunt eu adipisicing irure commodo voluptate incididunt id magna duis.',
    'sender': 'Nolan',
    'receiver': 'Harrington'
  }
];

@Injectable()
export class ChatService {
  private collection: AngularFirestoreCollection<Message>;
  private _messages: Observable<Message[]>;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.collection = db.collection<Message>('messages');
  }

  public messages(user: User): Observable<Message[]> {
    const senderCollection = this.db.collection<Message>('messages', ref => ref
      .where('receiver', '==', user.name)
      .orderBy('date', 'desc'));

    const receiverCollection = this.db.collection<Message>('messages', ref => ref
      .where('receiver', '==', user.name)
      .orderBy('date', 'desc'));

    const publicCollection = this.db.collection<Message>('messages', ref => ref
      .where('receiver', '==', null)
      .orderBy('date', 'desc'));

    const collections = [senderCollection, receiverCollection, publicCollection];
    return Observable.combineLatest(collections.map(c => c.valueChanges()))
      .map(messagesByCollection => [].concat(...messagesByCollection)
        .sort((message1: Message, message2: Message) =>
          message1.date.valueOf() - message2.date.valueOf()));
  }

  public add(message: Message) {

    this.http
      .post(MESSAGE_ENDPOINT, {...message, date: new Date()})
      .subscribe((response) => {
          console.log('CharServiceService.add', message , 'id ', response);
      });
    // this.collection.add(message);
  }


  public reset(): Observable<void> {
    return Observable.defer(async () => {
      await this.deleteAll();
      this.init();
    });
  }

  private async deleteAll() {
    const qry = await this.collection.ref.get();
    const batch = this.db.firestore.batch();

    // You can use the QuerySnapshot above like in the example i linked
    qry.forEach((doc: QueryDocumentSnapshot) => {
      batch.delete(doc.ref);
    });
    batch.commit();
  }

  private init() {
    for (const message of dummy) {
      message.date = new Date();
      this.collection.add(message);
    }
  }
}
