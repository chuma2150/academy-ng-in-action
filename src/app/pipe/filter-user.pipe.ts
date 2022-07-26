import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../services/user/user.service';

const filterUser = ({name: testUserName}: User) => ({name}: User) => name.localeCompare(testUserName);

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(users: User[], args?: User): User[]|null {
    if (!Array.isArray(users)) {
      return null;
    }

    return args ? users.filter(filterUser(args)) : users;
  }

}
