import {UserService, User} from './../../services/user/user.service';
import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() user: User;
  @Output() selectUser: EventEmitter<User> = new EventEmitter<User>();
  public users: Observable<User[]>;

  selected: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.list();
  }

  toggleUser(user: User) {
    let newUser = user;
    if (this.selected === user) {
      newUser = null;
    }
    this.selectUser.emit(newUser);
    this.selected = newUser;
  }
}
