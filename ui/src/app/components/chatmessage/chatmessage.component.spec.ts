import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ChatmessageComponent } from './chatmessage.component';

const getSentCssClass = <T>(fixture: ComponentFixture<T>): DebugElement | null => fixture.debugElement.query(By.css('.sent'));

describe('ChatmessageComponent', () => {
  let component: ChatmessageComponent;
  let fixture: ComponentFixture<ChatmessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChatmessageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatmessageComponent);
    component = fixture.componentInstance;

    component.message = { text: 'TEST', sender: 'ABC', receiver: undefined, date: new Date() };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sent class', () => {
    component.current = { name: 'ABC' };
    fixture.detectChanges();
    const sent = getSentCssClass(fixture);

    expect(sent).not.toBe(null);
  });

  it('should have a not sent class', () => {
    component.current = { name: 'NOTABC' };
    fixture.detectChanges();
    const sent = getSentCssClass(fixture);

    expect(sent).toBe(null);
  });
});
