import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging.interceptor';
import { BusyInterceptor } from './busy.interceptor';

export const httpInterceptorProviders: Provider[] = [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BusyInterceptor, multi: true }
]