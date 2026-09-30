import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { FeatureCard } from './feature-card';

describe('FeatureCard', () => {
  let fixture: ComponentFixture<FeatureCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCard);
    fixture.componentRef.setInput('title', 'Obras Plásticas');
    fixture.componentRef.setInput('link', '/museo-virtual/obras-plasticas');
    await fixture.whenStable();
  });

  it('should render title and link', () => {
    const anchor = (fixture.nativeElement as HTMLElement).querySelector('a')!;
    expect(anchor.textContent).toContain('Obras Plásticas');
    expect(anchor.getAttribute('href')).toBe('/museo-virtual/obras-plasticas');
  });

  it('should show a placeholder when there is no image', () => {
    expect((fixture.nativeElement as HTMLElement).querySelector('.feature-card__placeholder')).toBeTruthy();
  });
});
