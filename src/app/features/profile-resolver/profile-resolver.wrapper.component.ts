import {Component, OnInit} from '@angular/core';
import {User} from '../../services/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Component({
  template: `<app-profile-resovler [profile]="user$|async"></app-profile-resovler>`
})
export class ProfileResolverWrapperComponent implements OnInit {
  public user$: Observable<User>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user$ = this.route.data.pipe(pluck('user'));
  }
}
