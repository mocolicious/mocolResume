import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusyService } from 'src/app/services/busy.service';

@Component({
    selector: 'app-busy',
    templateUrl: './busy.component.html',
    styleUrls: ['./busy.component.scss'],
    standalone: false
})
export class BusyComponent implements OnInit {

  busyState$: Observable<{ isBusy: boolean, message: string }>;

  constructor(busyService: BusyService) {
    this.busyState$ = busyService.busyState$;
   }

  ngOnInit(): void {
  }

}
