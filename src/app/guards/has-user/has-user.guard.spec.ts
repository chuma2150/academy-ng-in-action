import { MockUserService } from './../../components/user/user.component.spec';
import { TestBed, async, inject } from '@angular/core/testing';
import { HasUserGuard } from './has-user.guard';
import { UserService, User } from '../../services/user/user.service';
import { Subject } from 'rxjs';

describe('HasUserGuard', () => {
  let userSubject: Subject<User>;
  beforeEach(() => {
    userSubject = new Subject<User>();
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useValue: { user() { return userSubject; }}}
      ]
    });
  });

  it('should allow navigation if user is present', inject([HasUserGuard], (guard: HasUserGuard) => {
    let called = false;
    guard.canActivate().subscribe((value) => {
      expect(value).toBeTruthy();
      called = true;
    });
    userSubject.next({name: 'asdf'});
    expect(called).toBeTruthy();
  }));

  it('should not allow navigation if user is not present', inject([HasUserGuard], (guard: HasUserGuard) => {
    let called = false;
    guard.canActivate().subscribe((value) => {
      expect(value).toBeFalsy();
      called = true;
    });
    userSubject.next(null);
    expect(called).toBeTruthy();
  }));

  it('should not respond without received user', inject([HasUserGuard], (guard: HasUserGuard) => {
    guard.canActivate().subscribe((value) => {
      fail();
    });
  }));
});
