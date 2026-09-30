import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    service = TestBed.inject(SearchService);
  });

  it('should return no results for an empty term', () => {
    expect(service.search('   ')).toEqual([]);
  });

  it('should match ignoring accents and case', () => {
    const labels = service.search('NACION').map((i) => i.label);
    expect(labels).toContain('Nación de Sueños');
  });

  it('should match descriptions', () => {
    expect(service.search('ermitas').length).toBeGreaterThan(0);
  });
});
