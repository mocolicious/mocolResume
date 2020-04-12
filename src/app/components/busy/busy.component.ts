import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-busy',
  templateUrl: './busy.component.html',
  styleUrls: ['./busy.component.scss']
})
export class BusyComponent implements OnInit {

  busyState$: Observable<{ isBusy: boolean, message: string }>;

  constructor(busyService: BusyService) {
    this.busyState$ = busyService.busyState$;
   }

  ngOnInit(): void {
  }

}
