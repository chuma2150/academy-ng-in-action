import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-cmpt',
  template: `<app-avatar [name]="name"></app-avatar>`
})
class TestComponent {
  name: string;
}
describe('AvatarComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, AvatarComponent ]
    })
    .compileComponents();
  }));

   beforeEach(() => {
     fixture = TestBed.createComponent(TestComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct background url', () => {
    const name = 'Hans';
    component.name = name;
    fixture.detectChanges();
    const iconStyle = fixture.debugElement.query(By.css('i')).styles;
    expect(iconStyle['background-image']).toEqual(`url("https://api.adorable.io/avatars/40/${name}.png")`);
  });
});
