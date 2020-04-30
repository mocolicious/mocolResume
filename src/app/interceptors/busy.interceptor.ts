import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay } from 'rxjs/operators'
import { BusyService } from '../services/busy.service';

@Injectable()
export class BusyInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const msg = request.method === 'GET' ? 'Loading...' : 'Saving...';
    this.busyService.increment(msg);
    return next.handle(request).pipe(
      delay(2000),
      finalize(() => {
        this.busyService.decrement();
      })
    );
  }
}
