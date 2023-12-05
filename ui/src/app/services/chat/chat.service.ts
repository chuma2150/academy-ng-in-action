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

  public messages(user: User | undefined): Observable<Message[]> {
    return this.http
      .get<Message[]>(`${MESSAGES_ENDPOINT}/user/${user?.name}`)
      .pipe(map(this.mapMessages));
  }

  public list(): Observable<Message[]> {
    return this.http
      .get<Message[]>(MESSAGES_ENDPOINT)
      .pipe(map(messages => messages.map(m => ({ ...m, date: new Date(m.date) }))));
  }

  public add(message: Message): Observable<string> {
    return this.http
      .post<string>(MESSAGES_ENDPOINT, message)
      .pipe(tap(id => console.log('CharService.add', { ...message, id })));
  }

  private mapMessages(messages: Message[]): Message[] {
    return messages.map(m => ({ ...m, date: new Date(m.date) }));
  }
}
