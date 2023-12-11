import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map, tap } from 'rxjs';
import { User } from '../user';

const MESSAGES_ENDPOINT = `${environment.endpoint}/messages`;

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private readonly http: HttpClient) { }

  messages(user: User | undefined): Observable<Message[]> {
    return this.http
      .get<Message[]>(`${MESSAGES_ENDPOINT}/user/${user?.name}`)
      .pipe(map(this.mapMessages));
  }

  list(): Observable<Message[]> {
    return this.http
      .get<Message[]>(MESSAGES_ENDPOINT)
      .pipe(map(messages => messages.map(m => ({ ...m, date: new Date(m.date) }))));
  }

  add(message: Message): Observable<Message> {
    return this.http
      .post<Message>(MESSAGES_ENDPOINT, message)
      .pipe(tap(({ id }) => console.log('CharService.add', { ...message, id })));
  }

  private mapMessages(messages: Message[]): Message[] {
    return messages.map(m => ({ ...m, date: new Date(m.date) }));
  }
}
