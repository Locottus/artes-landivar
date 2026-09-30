import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { TIMELINES } from '../../core/data/timeline.data';
import { TimelinePage } from './timeline-page';

@Component({ template: '' })
class Blank {}

describe('TimelinePage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelinePage],
      providers: [provideRouter([{ path: '**', component: Blank }])],
    }).compileComponents();
  });

  it('should render the milestones for the current route', async () => {
    const path = '/patrimonio-landivariano/momentum';
    await TestBed.inject(Router).navigateByUrl(path);
    const fixture = TestBed.createComponent(TimelinePage);
    await fixture.whenStable();
    const items = (fixture.nativeElement as HTMLElement).querySelectorAll('.timeline__item');
    expect(items.length).toBe(TIMELINES[path].length);
  });
});
