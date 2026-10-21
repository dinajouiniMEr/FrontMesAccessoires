import { TestBed } from '@angular/core/testing';
import { Accessoire } from './accessoire';

describe('Accessoire', () => {
  let service: Accessoire;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Accessoire);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
