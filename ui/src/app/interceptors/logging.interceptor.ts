import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.url.includes('/messages')) {
      const now = new Date().toISOString();
      const httpVerb = req.method;
      const endpoint = req.urlWithParams;

      console.log(`[${now}] [${httpVerb}] ${endpoint}`);
    }

    return next.handle(req);
  }
}
