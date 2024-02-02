import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/messages')) {
      const now = new Date().toISOString();
      const httpVerb = req.method;
      const endpoint = req.urlWithParams;

      console.log(`[${now}] [${httpVerb}] ${endpoint}`);
    }

    return next.handle(req);
  }
}
