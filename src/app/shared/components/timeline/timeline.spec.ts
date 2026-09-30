import { TestBed } from '@angular/core/testing';

import { Timeline } from './timeline';

describe('Timeline', () => {
  it('should render one item per entry', async () => {
    const fixture = TestBed.createComponent(Timeline);
    fixture.componentRef.setInput('entries', [
      { year: '1961', title: 'Fundación', description: 'Inicio' },
      { year: '2021', title: 'Aniversario', description: '60 años' },
    ]);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('.timeline__item').length).toBe(2);
  });

  it('should show an empty state', async () => {
    const fixture = TestBed.createComponent(Timeline);
    fixture.componentRef.setInput('entries', []);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('.placeholder-box')).toBeTruthy();
  });
});
