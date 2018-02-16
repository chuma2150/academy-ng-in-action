import {Component, OnInit} from '@angular/core';
import {User, UserService} from './services/user/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user$: Observable<User>;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.user();
  }
}
