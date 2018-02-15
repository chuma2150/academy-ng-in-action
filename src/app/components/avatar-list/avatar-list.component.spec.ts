import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarListComponent } from './avatar-list.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AvatarListComponent', () => {
  let component: AvatarListComponent;
  let fixture: ComponentFixture<AvatarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
