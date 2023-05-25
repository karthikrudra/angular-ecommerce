import { TestBed } from '@angular/core/testing';

import { SellerModuleService } from './seller-module.service';

describe('SellerModuleService', () => {
  let service: SellerModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
