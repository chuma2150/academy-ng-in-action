import {inject, TestBed} from '@angular/core/testing';
import {UserService} from './user.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {MockAngularFireStore} from '../chat/chat.service.spec';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: AngularFirestore, useClass: MockAngularFireStore}
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
