import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { ChatmessageComponent } from './chatmessage.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

const getSentCssClass = <T>(fixture: ComponentFixture<T>) => fixture.debugElement.query(By.css('.sent'));

describe('ChatmessageComponent', () => {
  let component: ChatmessageComponent;
  let fixture: ComponentFixture<ChatmessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatmessageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatmessageComponent);
    component = fixture.componentInstance;

    component.message = {text: 'TEST', sender: 'ABC', receiver: null};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sent class', () => {
    component.current = {name: 'ABC'};
    fixture.detectChanges();
    const sent = getSentCssClass(fixture);

    expect(sent).not.toBe(null);
  });

  it('should have a not sent class', () => {
    component.current = {name: 'NOTABC'};
    fixture.detectChanges();
    const sent = getSentCssClass(fixture);

    expect(sent).toBe(null);
  });
});
