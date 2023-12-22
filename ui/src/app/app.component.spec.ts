import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from './services/user/user.service';
import { MockUserService } from './components/user/user.component.spec';

describe('AppComponent', () => {
  let component: AppComponent;
  let injectedService: UserService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: UserService, useClass: MockUserService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;

    injectedService = TestBed.inject(UserService);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`should call ${UserService.name}.user() on initialize`, () => {
    spyOn(injectedService, 'user').and.callThrough();

    component.ngOnInit();
    expect(injectedService.user).toHaveBeenCalled();
  });
});
