import { TestBed } from '@angular/core/testing';

import { PageHero } from './page-hero';

describe('PageHero', () => {
  it('should render title and description', async () => {
    const fixture = TestBed.createComponent(PageHero);
    fixture.componentRef.setInput('title', 'Bicentenario GT');
    fixture.componentRef.setInput('description', 'Descripción');
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Bicentenario GT');
    expect(el.querySelector('.page-hero__lead')?.textContent).toContain('Descripción');
  });
});
