import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SITE } from '../../core/config/site.config';
import { ContactPage } from './contact-page';

describe('ContactPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render email and extensions', async () => {
    const fixture = TestBed.createComponent(ContactPage);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('a[href^="mailto:"]')?.textContent).toContain(SITE.contact.email);
    expect(el.querySelectorAll('tbody tr').length).toBe(SITE.contact.extensions.length);
  });
});
