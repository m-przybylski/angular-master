import { TestBed, inject } from '@angular/core/testing';

import { HttpBeerService } from './http-beer.service';

describe('HttpBeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpBeerService]
    });
  });

  it('should be created', inject([HttpBeerService], (service: HttpBeerService) => {
    expect(service).toBeTruthy();
  }));
});
