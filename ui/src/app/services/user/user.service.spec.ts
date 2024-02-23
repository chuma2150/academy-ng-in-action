import { inject, TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from './user';
import { provideMockStore } from '@ngrx/store/testing';

export const MOCK_USERS: User[] = [
  { name: 'TEST USER' },
  { name: 'TEST USER 2' },
];

describe(UserService.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
