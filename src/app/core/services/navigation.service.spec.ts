import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    service = TestBed.inject(NavigationService);
  });

  it('should expose the top-level sections', () => {
    expect(service.items.map((i) => i.path)).toContain('/museo-virtual');
  });

  it('should find an item by path, ignoring query and trailing slash', () => {
    expect(service.findByPath('/museo-virtual/obras-plasticas/?x=1')?.label).toBe('Obras Plásticas');
  });

  it('should build the breadcrumb trail', () => {
    const trail = service.trail('/patrimonio-guatemalteco/bic/tours-360/manchen');
    expect(trail.map((i) => i.label)).toEqual([
      'Patrimonio Cultural Guatemalteco',
      'Bien de Interés Cultural (BIC)',
      'Tours virtuales 360°',
      'Manchén',
    ]);
  });

  it('should return an empty trail for home', () => {
    expect(service.breadcrumbs()).toEqual([]);
  });
});
