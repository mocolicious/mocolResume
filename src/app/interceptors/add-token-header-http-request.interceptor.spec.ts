import { TestBed } from '@angular/core/testing';

import { AddTokenHeaderHttpRequestInterceptor } from './add-token-header-http-request.interceptor';

describe('AddTokenHeaderHttpRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddTokenHeaderHttpRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddTokenHeaderHttpRequestInterceptor = TestBed.inject(AddTokenHeaderHttpRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
