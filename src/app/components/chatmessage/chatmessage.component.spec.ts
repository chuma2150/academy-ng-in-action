import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { ChatmessageComponent } from './chatmessage.component';

const getSentCssClass = <T>(fixture: ComponentFixture<T>) => fixture.debugElement.query(By.css('.sent'));

describe('ChatmessageComponent', () => {
  let component: ChatmessageComponent;
  let fixture: ComponentFixture<ChatmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatmessageComponent);
    component = fixture.componentInstance;

    component.message = {text: 'TEST', sender: 'ABC'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sent class', () => {
    component.current = 'ABC';
    fixture.detectChanges();
    const sent = getSentCssClass(fixture);

    expect(sent).not.toBe(null);
  });

  it('should have a not sent class', () => {
    component.current = 'NOTABC';
    fixture.detectChanges();
    const sent = getSentCssClass(fixture);

    expect(sent).toBe(null);
  });
});
