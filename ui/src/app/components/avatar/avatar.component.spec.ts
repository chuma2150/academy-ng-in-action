import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AvatarComponent } from './avatar.component';

@Component({
  selector: 'app-test-cmpt',
  template: '<app-avatar [name]="name"></app-avatar>',
})
class TestComponent {
  name: string;
}
describe(AvatarComponent.name, () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, AvatarComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct background url', () => {
    const name = 'Hans';
    component.name = name;
    fixture.detectChanges();

    const imgAttributes = fixture.debugElement.query(By.css('img')).attributes;

    expect(imgAttributes['src']).toContain('data:image/svg+xml;utf8,');
  });
});
