import {inject, TestBed} from '@angular/core/testing';

import {ChatServiceService} from './chat-service.service';
import {AngularFirestore} from 'angularfire2/firestore';

export class MockAngularFireStore {
  public collection() {}
}

describe('ChatServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AngularFirestore, useClass: MockAngularFireStore},
        ChatServiceService
      ]
    });
  });

  it('should be created', inject([ChatServiceService], (service: ChatServiceService) => {
    expect(service).toBeTruthy();
  }));
});
