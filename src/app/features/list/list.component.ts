import { UserService, User } from './../../services/user/user.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { map, Observable, zip } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() user: User | null;
  @Input() hideCurrentUser = false;
  @Input() selected?: User | null;
  @Output() selectUser: EventEmitter<User | null> = new EventEmitter<User | null>();
  public users$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = zip(
      this.userService.list(),
      this.userService.user(),
    ).pipe(map(([users, user]) => this.hideCurrentUser
      ? users.filter(u => u.name !== user?.name)
      : users));
  }

  toggleUser(user: User) {
    let newUser: User | null = user;
    if (this.selected === user) {
      newUser = null;
    }

    this.selectUser.emit(newUser);
    this.selected = newUser;
  }
}
