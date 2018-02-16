import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user/user.service';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

@Injectable()
export class HasUserGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate(): Observable<boolean> {
    return this.userService.user().first().map(user => !!user);
  }
}
