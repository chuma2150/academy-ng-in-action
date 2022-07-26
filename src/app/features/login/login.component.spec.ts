import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from '../../services/user/user.service';
import {MockUserService} from '../../components/user/user.component.spec';
import { MatSnackBar } from '@angular/material/snack-bar';
import { routes } from '../chat/chat-routing.module';
import { ChatModule } from '../chat/chat.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ChatModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [LoginComponent],
      providers: [
        {provide: UserService, useClass: MockUserService},
        {provide: MatSnackBar, userClass: { open: () => {} }}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
