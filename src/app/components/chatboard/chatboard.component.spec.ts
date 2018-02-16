import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChatboardComponent} from './chatboard.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ChatService} from '../../services/chat/chat.service';

const mockUsers = [{
  text: 'test',
  sender: 'test',
  receiver: 'test'
}];

export class MockChatService {
  public messages = () => Observable.of(mockUsers);
}

describe('ChatboardComponent', () => {
  let component: ChatboardComponent;
  let fixture: ComponentFixture<ChatboardComponent>;

  beforeEach(async(() => {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
