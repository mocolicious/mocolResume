import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyState$: Observable<{ isBusy: boolean, message: string }>;

  constructor() { }
}
