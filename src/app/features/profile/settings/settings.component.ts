import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { User } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public currentProfile$: Observable<User>;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentProfile$ = this.route.data.pipe(pluck('user'))
  }
}
