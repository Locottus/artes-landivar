import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should render the main sections', () => {
    expect(el.textContent).toContain('Museo Virtual');
    expect(el.textContent).toContain('Contacto');
  });

  it('should toggle the mobile menu', async () => {
    const toggle = el.querySelector<HTMLButtonElement>('.site-header__toggle')!;
    toggle.click();
    await fixture.whenStable();
    expect(el.querySelector('.site-header__nav')?.classList).toContain('is-open');
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
  });

  it('should open a submenu', async () => {
    const button = el.querySelector<HTMLButtonElement>('button.site-header__link')!;
    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(el.querySelector('.site-header__mega.is-open')).toBeTruthy();
  });
});
