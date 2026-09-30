import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AGENDA_EVENTS } from '../../core/data/agenda.data';
import { AgendaPage } from './agenda-page';

describe('AgendaPage', () => {
  let fixture: ComponentFixture<AgendaPage>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendaPage);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should list all events by default', () => {
    expect(el.querySelectorAll('.agenda__event').length).toBe(AGENDA_EVENTS.length);
  });

  it('should filter events by tag', async () => {
    const tallerButton = Array.from(el.querySelectorAll<HTMLButtonElement>('.agenda__filters .chip')).find(
      (b) => b.textContent?.trim() === 'Taller',
    )!;
    tallerButton.click();
    await fixture.whenStable();
    const expected = AGENDA_EVENTS.filter((e) => e.tag === 'Taller').length;
    expect(el.querySelectorAll('.agenda__event').length).toBe(expected);
    expect(tallerButton.getAttribute('aria-pressed')).toBe('true');
  });
});
