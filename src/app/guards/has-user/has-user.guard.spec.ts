import { TestBed, inject } from '@angular/core/testing';
import { HasUserGuard } from './has-user.guard';
import { UserService, User } from '../../services/user/user.service';
import { Subject } from 'rxjs';

describe('HasUserGuard', () => {
  let userSubject: Subject<User | null>;
  beforeEach(() => {
    userSubject = new Subject<User | null>();
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useValue: { user() { return userSubject; } } }
      ]
    });
  });

  it('should allow navigation if user is present', inject([HasUserGuard], (guard: HasUserGuard) => {
    let called = false;
    guard.canActivate().subscribe((value) => {
      expect(value).toBeTruthy();
      called = true;
    });
    userSubject.next({ name: 'asdf' });
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
});
