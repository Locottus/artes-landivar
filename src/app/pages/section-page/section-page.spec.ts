import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { SectionPage } from './section-page';

@Component({ template: '' })
class Blank {}

describe('SectionPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPage],
      providers: [provideRouter([{ path: '**', component: Blank }])],
    }).compileComponents();
  });

  it('should render a card per child section', async () => {
    await TestBed.inject(Router).navigateByUrl('/bicentenario');
    const fixture = TestBed.createComponent(SectionPage);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('cvp-feature-card').length).toBe(2);
  });

  it('should render a placeholder for leaf pages', async () => {
    await TestBed.inject(Router).navigateByUrl('/bicentenario/himno-nacional');
    const fixture = TestBed.createComponent(SectionPage);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('.placeholder-box')).toBeTruthy();
  });
});
