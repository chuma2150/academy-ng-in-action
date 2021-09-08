import { By } from '@angular/platform-browser';
import {waitForAsync, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {ChatboardComponent} from './chatboard.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';

import {ChatService} from '../../services/chat/chat.service';

const mockMessages = [{
  text: 'test',
  sender: 'test',
  receiver: 'test'
},
{
  text: 'test',
  sender: 'test',
  receiver: 'test'
}];

export class MockChatService {
  public messages = () => of(mockMessages);
}

describe('ChatboardComponent', () => {
  let component: ChatboardComponent;
  let fixture: ComponentFixture<ChatboardComponent>;
  function getChatmessages() {
    return fixture.debugElement.queryAll(By.css('app-chatmessage'));
  }
  function getFirstChatmessage() {
    return fixture.debugElement.query(By.css('app-chatmessage'));
  }
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChatboardComponent],
      providers: [{
        provide: ChatService,
        useClass: MockChatService
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should call chatService on Init', inject([ChatService], (chatService: ChatService) => {
    const spy = spyOn(chatService, 'messages').and.callThrough();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  }));

  it('should show one chat message component per message', () => {
    fixture.detectChanges();
    expect(getChatmessages().length).toBe(mockMessages.length);
  });

  it('should assign chat message to chat message component', () => {
    fixture.detectChanges();

    expect(getFirstChatmessage().properties['message']).toBe(mockMessages[0]);
  });

  it('should assign user to chat message component', () => {
    const user = { name: 'Andi' };
    component.user = user;
    fixture.detectChanges();
    expect(getFirstChatmessage().properties['current']).toBe(user);
  });
});
