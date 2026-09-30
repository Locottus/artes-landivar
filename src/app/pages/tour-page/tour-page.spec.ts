import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { TourPage } from './tour-page';

@Component({ template: '' })
class Blank {}

describe('TourPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPage],
      providers: [provideRouter([{ path: '**', component: Blank }])],
    }).compileComponents();
  });

  it('should render the 360° viewer for the current tour', async () => {
    await TestBed.inject(Router).navigateByUrl('/patrimonio-guatemalteco/bic/tours-360/manchen');
    const fixture = TestBed.createComponent(TourPage);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('cvp-tour-viewer figcaption')?.textContent).toContain('Manchén');
  });
});
