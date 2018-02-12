import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/defer';
import { Message } from './message';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { QueryDocumentSnapshot } from '@firebase/firestore-types';

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
export class ChatServiceService {
  private collection: AngularFirestoreCollection<Message>;
  private _messages: Observable<Message[]>;

  constructor(private db: AngularFirestore) {
    this.collection = db.collection<Message>('messages');
  }

  public messages(receiver: string | null): Observable<Message[]> {
    const collection = this.db.collection<Message>('messages', ref => ref
      .where('receiver', '==', receiver)
      .orderBy('date', 'desc'));
    // return Observable.of(this._messages);
    return collection.valueChanges();
  }

  public add(message: Message) {
      message.date  = new Date();
      this.collection.add(message);
  }


  public reset(): Observable<void> {
    return Observable.defer(async() => {
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
    for (const message of dummy){
      message.date = new Date();
      this.collection.add(message);
    }
  }
}
