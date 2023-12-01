import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CosmosService } from '../cosmos/cosmos.service';

export const HairColors = ['', 'black', 'blonde', 'red', 'darkbrown'] as const;
export type HairColor = typeof HairColors[number];

export interface UserDto {
  id?: string;
  name: string;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  hairColor?: HairColor;
}

export interface User {
  id?: string;
  name: string;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  hairColor?: HairColor;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$: Subject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private readonly cosmosService: CosmosService) {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser && currentUser !== 'null') {
      const parsedUser = JSON.parse(currentUser);
      this.set({ ...parsedUser, birthDate: parsedUser.birthDate ? new Date(parsedUser.birthDate) : undefined });
    }
  }

  public set(user: User | null) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.user$.next(user);
  }

  public unset() {
    localStorage.clear();
    this.set(null);
  }

  public async update(user: User): Promise<void> {
    if (!await this.userExists(user)) {
      throw new Error(`User ${user.name} doesn't exist.`)
    }

    await this.cosmosService.users.items.upsert({ ...user, birthDate: user.birthDate?.toISOString() });
  }

  public async add(user: User): Promise<void> {
    if (await this.userExists(user)) {
      throw new Error(`User ${user.name} already exists.`)
    }

    await this.cosmosService.users.items.create({ ...user, birthDate: user.birthDate?.toISOString() });
  }

  public async list(): Promise<User[]> {
    const users = await this.cosmosService.users.items
      .query<UserDto>('select * from u')
      .fetchAll();
    return users.resources.map(user => ({ ...user, birthDate: user.birthDate ? new Date(user.birthDate) : undefined }));
  }

  public user(): Observable<User | null> {
    return this.user$.asObservable();
  }

  private async userExists(user: User): Promise<boolean> {
    const users = await this.list()
    return users.some(u => u.name.toUpperCase() === user.name.toUpperCase());
  }
}
