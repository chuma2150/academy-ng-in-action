import {UserService, User} from './../../services/user/user.service';
import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() user: User | null;
  @Output() selectUser: EventEmitter<User | null> = new EventEmitter<User | null>();
  public users$: Observable<User[]>;

  @Input() selected?: User | null;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users$ = this.userService.list();
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
