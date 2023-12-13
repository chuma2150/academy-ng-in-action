import { By } from '@angular/platform-browser';
import { waitForAsync, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatService, Message } from 'src/app/services';
import { ChatboardComponent } from './chatboard.component';

const mockMessages: Message[] = [{
  text: 'test1',
  sender: 'test1',
  receiver: 'test2',
  date: new Date('2024-07-21'),
},
{
  text: 'test2',
  sender: 'test2',
  receiver: 'test1',
  date: new Date('2024-07-20'),
}];

const mockReceivedMessages: Message[] = [{
  text: 'test3',
  sender: 'test3',
  receiver: 'test1',
  date: new Date('2024-07-19'),
}];

export class MockChatService {
  messages = (): Observable<Message[]> => of(mockMessages);
  receivedMessages: Message[] = mockReceivedMessages;
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
        useClass: MockChatService,
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    expect(getChatmessages().length).toBe(mockMessages.length + mockReceivedMessages.length);
  });

  it('should sort chat messages by date ans assign chat message to chat message component', () => {
    fixture.detectChanges();

    expect(getFirstChatmessage().properties['message']).toEqual(mockReceivedMessages[0]);
  });

  it('should assign user to chat message component', () => {
    const user = { name: 'Andi' };
    component.user = user;
    fixture.detectChanges();
    expect(getFirstChatmessage().properties['current']).toEqual(user);
  });
});
