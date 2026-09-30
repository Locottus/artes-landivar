import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NotFoundPage } from './not-found-page';

describe('NotFoundPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should offer a link back home', async () => {
    const fixture = TestBed.createComponent(NotFoundPage);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('a[href="/"]')).toBeTruthy();
  });
});
