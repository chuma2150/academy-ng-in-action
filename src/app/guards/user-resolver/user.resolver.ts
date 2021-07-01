import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {User, UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userName: string = route.params.profile;
    return this.userService.list().pipe(map(users => {
      return users.find(u => u.name === userName);
    }));
  }

}
