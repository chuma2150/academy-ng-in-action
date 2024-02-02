import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoggingInterceptor } from './logging.interceptor';

describe('LoggingInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoggingInterceptor,
          multi: true,
        },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should log messages when URL includes "/messages"', () => {
    const url = '/messages';
    const request = httpClient.get(url);
    const consoleLogSpy = spyOn(console, 'log');

    request.subscribe();

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush({});

    expect(consoleLogSpy).toHaveBeenCalled();
  });

  it('should not log messages when URL does not include "/messages"', () => {
    const url = '/users';
    const request = httpClient.get(url);
    const consoleLogSpy = spyOn(console, 'log');

    request.subscribe();

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush({});

    expect(consoleLogSpy).not.toHaveBeenCalled();
  });
});
