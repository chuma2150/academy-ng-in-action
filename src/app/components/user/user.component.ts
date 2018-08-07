import { Observable } from 'rxjs';
import { UserService, User } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: Observable<User>;

  constructor(private userService: UserService) {
    this.user = this.userService.user();
  }
}
