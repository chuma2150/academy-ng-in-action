import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminService } from 'src/app/services';
import { MainComponent } from './main.component';

describe(MainComponent.name, () => {
  let fixture: ComponentFixture<MainComponent>;
  let component: MainComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [
        { provide: AdminService, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
