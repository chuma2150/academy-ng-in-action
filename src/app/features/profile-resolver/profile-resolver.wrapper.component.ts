import {Component, OnInit} from '@angular/core';
import {User} from '../../services/user/user.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import {Observable} from 'rxjs/Observable';

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
