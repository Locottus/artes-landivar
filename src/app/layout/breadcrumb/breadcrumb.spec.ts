import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Breadcrumb } from './breadcrumb';

describe('Breadcrumb', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Breadcrumb],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render nothing on the home page', async () => {
    const fixture = TestBed.createComponent(Breadcrumb);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('nav')).toBeNull();
  });
});
