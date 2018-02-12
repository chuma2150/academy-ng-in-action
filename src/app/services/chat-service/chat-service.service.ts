import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import { Message } from './message';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

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
    'receiver': 'Guy'
  },
  {
    'text': 'Et aute amet in sint enim occaecat duis ea esse id nostrud enim quis nostrud.',
    'sender': 'Rose',
    'receiver': 'Conner'
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
    this._messages = this.collection.valueChanges();
  }

  public messages(): Observable<Message[]> {
    // return Observable.of(this._messages);
    return this._messages;
  }

  public add(message: Message) {
      this.collection.add(message);
  }


  public init() {
    for (const message of dummy){
      this.collection.add(message);
    }
  }
}
