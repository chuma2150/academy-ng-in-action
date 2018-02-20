import {Component, OnInit} from '@angular/core';
import {User} from '../../services/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  template: `<app-profile-resovler [profile]="user$|async"></app-profile-resovler>`
})
export class ProfileResolverWrapperComponent implements OnInit {
  public user$: Observable<User>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user$ = this.route.data.pluck('user');
  }
}
