import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgePipe } from './age.pipe';
import { ProfileViewComponent } from './profile-view.component';

describe(ProfileViewComponent.name, () => {
  let fixture: ComponentFixture<ProfileViewComponent>;
  let component: ProfileViewComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileViewComponent, AgePipe],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfileViewComponent);
    component = fixture.componentInstance;

    component.user = { name: 'some name' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
