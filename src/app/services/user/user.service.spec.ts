import {inject, TestBed} from '@angular/core/testing';
import {UserService} from './user.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {MockAngularFireStore} from '../chat-service/chat-service.service.spec';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AngularFirestore, useClass: MockAngularFireStore},
        UserService
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
