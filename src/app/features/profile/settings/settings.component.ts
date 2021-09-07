import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { User, UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public currentProfile$: Observable<User>;
  
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.currentProfile$ = this.route.data.pipe(
      pluck('user'),
      map(u =>  Object.assign({}, u)),
    );
  }

  save(updatedProfile: User): void {
    console.log(updatedProfile);
    this.userService.update(updatedProfile);
  }
}
