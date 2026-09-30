import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SITE } from '../../core/config/site.config';
import { SocialPage } from './social-page';

describe('SocialPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render a secure external link per network', async () => {
    const fixture = TestBed.createComponent(SocialPage);
    await fixture.whenStable();
    const links = (fixture.nativeElement as HTMLElement).querySelectorAll('a.social__card');
    expect(links.length).toBe(SITE.social.length);
    expect(links[0].getAttribute('rel')).toContain('noopener');
  });
});
