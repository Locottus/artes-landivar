import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { GlossaryPage } from './glossary-page';

describe('GlossaryPage', () => {
  let fixture: ComponentFixture<GlossaryPage>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlossaryPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(GlossaryPage);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should group terms alphabetically (accents grouped with base letter)', () => {
    const letters = Array.from(el.querySelectorAll('.glossary__letter')).map((h) => h.textContent?.trim());
    expect(letters).toContain('O');
    expect(letters).toEqual([...letters].sort());
  });

  it('should filter terms', async () => {
    const input = el.querySelector<HTMLInputElement>('#glossary-filter')!;
    input.value = 'oleo';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(el.querySelectorAll('.glossary__entry').length).toBe(1);
  });
});
