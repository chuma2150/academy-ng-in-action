import { User } from './../user/user.service';
import { Injectable } from '@angular/core';
import { Message } from './message';
import { CosmosService } from '../cosmos/cosmos.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private readonly cosmosService: CosmosService) { }

  public async messages(user: User | null): Promise<Message[]> {
    const senderCollection = await this.cosmosService.messages.items
      .query<Message>(`select * from m where m.name = '${user?.name}'`)
      .fetchAll();

    const receiverCollection = await this.cosmosService.messages.items
      .query<Message>(`select * from m where m.receiver = '${user?.name}'`)
      .fetchAll();

    const publicCollection = await this.cosmosService.messages.items
      .query<Message>(`select * from m where m.receiver = null and m.sender != '${user?.name}'`)
      .fetchAll();

    return [senderCollection, receiverCollection, publicCollection]
      .flatMap(c => c.resources);
  }

  public async list(): Promise<Message[]> {
    const messages = await this.cosmosService.messages.items
      .query<Message>('select * from m')
      .fetchAll();

    return messages.resources
  }

  public async add(message: Message): Promise<void> {
    const dbMessage = await this.cosmosService.messages.items.create(message);
    console.log(`ChatService.add, chatId: ${dbMessage.item.id}`);
  }
}
