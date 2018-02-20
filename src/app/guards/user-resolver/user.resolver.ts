import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User, UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';

const mapFind =  <T>(findFn: (T) => boolean) => (source: Observable<T[]>) => source.map((list: T[]) => list.find(findFn));

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const userName: string = route.params.profile;
    const findUser = ({name}: User) => name === userName;
    const find = mapFind<User>(findUser);

    return this.userService.list().let(find);
  }

}
