import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {User, UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs/Observable';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const users: User[] = [
  {name: 'TEST USER'},
  {name: 'TEST USER 2'}
];

export class MockUserService {
  public user = () => Observable.of(users);
  public list = () => Observable.of(users);
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ UserComponent ],
      providers: [{ provide: UserService, useClass: MockUserService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
