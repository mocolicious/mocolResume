import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  blockingTaskCount: number;
  busyState$: Observable<{ isBusy: boolean, message: string }>;

  constructor() { }

  increment(msg: string) {
    this.blockingTaskCount++;
    this.busyState$.pipe(
      map(() => ({ isBusy: true, message: msg }))
    )
  }

  decrement() {
    this.blockingTaskCount--;
    if(this.blockingTaskCount === 0) {
      this.busyState$.pipe(
        map(() => ({ isBusy: false, message: undefined }))
      )
    }
  }
}
