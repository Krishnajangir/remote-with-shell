import { TestBed } from '@angular/core/testing';

import { BundleloaderService } from './bundleloader.service';

describe('BundleloaderService', () => {
  let service: BundleloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundleloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
