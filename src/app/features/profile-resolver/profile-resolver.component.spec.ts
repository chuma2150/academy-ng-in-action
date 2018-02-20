import {MockUserService} from './../../components/user/user.component.spec';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserService} from '../../services/user/user.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {ProfileResolverComponent} from './profile-resolver.component';

describe('ProfileResolverComponent', () => {
  let component: ProfileResolverComponent;
  let fixture: ComponentFixture<ProfileResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProfileResolverComponent],
      providers: [
        { provide: UserService, useClass: MockUserService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
