import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SearchPage } from './search-page';

describe('SearchPage', () => {
  let fixture: ComponentFixture<SearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPage);
  });

  it('should show no results without a term', async () => {
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('.search-page__result').length).toBe(0);
  });

  it('should list results for the query param term', async () => {
    fixture.componentRef.setInput('q', 'tours');
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.search-page__result').length).toBeGreaterThan(0);
    expect(el.querySelector('.search-page__status')?.textContent).toContain('tours');
  });
});
