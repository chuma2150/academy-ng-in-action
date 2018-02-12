import { UserService } from './../../services/user/user.service';
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
     this.user.set({name: this.name});
  }


}
