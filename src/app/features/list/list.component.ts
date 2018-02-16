import {UserService, User} from './../../services/user/user.service';
import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() user: User;
  @Output() select: EventEmitter<User> = new EventEmitter<User>();
  public users: Observable<User[]>;

  private selected: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.list();
  }

  selectUser(user: User) {
    this.select.emit(user);
    this.selected = user;
  }
}
