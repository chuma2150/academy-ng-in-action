import { Observable } from 'rxjs';
import { map, switchMap, pluck } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentProfile$: Observable<User | undefined>;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.currentProfile$ = this.userService.list()
      .pipe(switchMap(list =>
        this.getCurrentFromList(list)));
  }

  private getCurrentFromList(list: User[]) {
    return  this.route.params.pipe(
      pluck<Params, string>('username'),
      map(profile => list.find(u => u.name === profile))
    );
  }

  selectProfile(user: User | null) {
    this.router.navigate(['profile', user?.name]);
  }
}
