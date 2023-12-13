import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { UserService } from '../user';
import { MockUserService } from 'src/app/components/user/user.component.spec';
import { ChatService } from '../chat';
import { MockChatService } from 'src/app/components/chatboard/chatboard.component.spec';

describe('AdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: ChatService, useClass: MockChatService },
      ],
    });
  });

  it('should be created', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));
});
