import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { HomePage } from './home-page';

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    await fixture.whenStable();
  });

  it('should render one "Chispudo" card per main section', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('cvp-feature-card[variant="feature"]');
    expect(cards.length).toBe(4);
  });

  it('should navigate to the search page on submit', () => {
    const router = TestBed.inject(Router);
    const spy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const el = fixture.nativeElement as HTMLElement;
    el.querySelector<HTMLInputElement>('#home-search')!.value = 'cacao';
    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    expect(spy).toHaveBeenCalledWith(['/buscar'], { queryParams: { q: 'cacao' } });
  });
});
