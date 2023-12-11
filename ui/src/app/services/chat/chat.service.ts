import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map, tap } from 'rxjs';
import { User } from '../user';
import { HttpTransportType, HubConnectionBuilder } from '@microsoft/signalr';

const MESSAGES_ENDPOINT = `${environment.endpoint}/messages`;
const CHAT_HUB_ENDPOINT = `${environment.endpoint}/chatHub`;

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  receivedMessages: Message[] = [];

  private readonly connection = new HubConnectionBuilder()
    .withUrl(CHAT_HUB_ENDPOINT, {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets,
    })
    .build();

  constructor(private readonly http: HttpClient) {
    this.connection
      .start()
      .catch(error => console.error(error));

    this.connection.on(
      'ReceiveMessage',
      (message: Message) => this.receivedMessages.push(this.mapMessage(message)),
    );
  }

  messages(user: User | undefined): Observable<Message[]> {
    return this.http
      .get<Message[]>(`${MESSAGES_ENDPOINT}/user/${user?.name}`)
      .pipe(map(this.mapMessages.bind(this)));
  }

  list(): Observable<Message[]> {
    return this.http
      .get<Message[]>(MESSAGES_ENDPOINT)
      .pipe(map(this.mapMessages.bind(this)));
  }

  add(message: Message): Observable<Message> {
    this.connection
      .invoke('SendMessage', message)
      .catch(error => console.error(error));

    return this.http
      .post<Message>(MESSAGES_ENDPOINT, message)
      .pipe(tap(({ id }) => console.log('CharService.add', { ...message, id })));
  }

  private mapMessages(messages: Message[]): Message[] {
    return messages.map(this.mapMessage);
  }

  private mapMessage(message: Message): Message {
    return { ...message, date: new Date(message.date) };
  }
}
