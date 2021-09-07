import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { User, UserService } from 'src/app/services/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class CurrentUserResolver implements Resolve<User> {
    constructor(private userService: UserService) {
    }

    resolve(): Observable<User> {
        return this.userService.user().pipe(first());
    }
}