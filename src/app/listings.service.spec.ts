/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListingsService } from './listings.service';

describe('ListingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListingsService]
    });
  });

  it('should ...', inject([ListingsService], (service: ListingsService) => {
    expect(service).toBeTruthy();
  }));
});
