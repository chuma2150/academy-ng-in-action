import { Injectable } from '@angular/core';

export interface User {
  name: string;
}

@Injectable()
export class UserService {
  public user: User;

  constructor() { }

  public set(user: User) {
    this.user = user;
  }

}
