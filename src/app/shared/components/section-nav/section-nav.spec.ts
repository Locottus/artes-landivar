import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SITE_MAP } from '../../../core/data/navigation.data';
import { SectionNav } from './section-nav';

describe('SectionNav', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionNav],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the nested tree of the section', async () => {
    const fixture = TestBed.createComponent(SectionNav);
    fixture.componentRef.setInput('section', SITE_MAP[0]);
    await fixture.whenStable();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Obras Plásticas');
    expect(text).toContain('Pintura');
  });
});
