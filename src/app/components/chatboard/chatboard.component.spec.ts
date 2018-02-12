import { ChatServiceService } from './../../services/chat-service/chat-service.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboardComponent } from './chatboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ChatboardComponent', () => {
  let component: ChatboardComponent;
  let fixture: ComponentFixture<ChatboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatboardComponent ],
      providers: [{
        provide: ChatServiceService,
        useFactory: () => {
          console.log('test service');
        }
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
