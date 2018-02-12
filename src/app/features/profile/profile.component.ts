import { UserService, User } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public name: string;

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  register() {
     this.user.add({name: this.name});
     this.navigate();
  }
  login(user: User) {
    this.user.set(user);
    this.navigate();
  }

  private navigate() {
    this.router.navigate(['/list']);
  }
}
