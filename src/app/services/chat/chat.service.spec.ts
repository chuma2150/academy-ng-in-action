import { HttpClientTestingModule } from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';

import {ChatService} from './chat.service';
import {AngularFirestore} from 'angularfire2/firestore';

export class MockAngularFireStore {
  public collection() {}
}

describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        {provide: AngularFirestore, useClass: MockAngularFireStore},
        ChatService
      ]
    });
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
