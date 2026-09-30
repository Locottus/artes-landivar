import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { Component } from '@angular/core';

import { SectionLayout } from './section-layout';

@Component({ template: '' })
class Blank {}

describe('SectionLayout', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionLayout],
      providers: [provideRouter([{ path: '**', component: Blank }])],
    }).compileComponents();
  });

  it('should render the current page title and section menu', async () => {
    await TestBed.inject(Router).navigateByUrl('/museo-virtual/glosariarte');
    const fixture = TestBed.createComponent(SectionLayout);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('GlosariArte');
    expect(el.querySelector('cvp-section-nav')).toBeTruthy();
  });
});
