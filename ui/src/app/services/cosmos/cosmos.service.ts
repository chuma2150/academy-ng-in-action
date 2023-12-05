import { Injectable } from '@angular/core';
import { Container, CosmosClient, Database } from '@azure/cosmos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CosmosService {
  private readonly client: CosmosClient;
  private readonly db: Database;
  readonly users: Container;
  readonly messages: Container;

  constructor() {
    this.client = new CosmosClient(environment.cosmos);

    this.db = this.client.database('academyNgInActionDB');

    this.users = this.db.container('usersCollection');
    this.messages = this.db.container('messagesCollection');
  }
}
