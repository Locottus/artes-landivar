import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionForm } from './suggestion-form';

describe('SuggestionForm', () => {
  let fixture: ComponentFixture<SuggestionForm>;
  let el: HTMLElement;

  const setValue = (selector: string, value: string): void => {
    const input = el.querySelector<HTMLInputElement | HTMLTextAreaElement>(selector)!;
    input.value = value;
    input.dispatchEvent(new Event('input'));
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(SuggestionForm);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should show validation errors when submitting an empty form', async () => {
    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
    expect(el.querySelectorAll('.error').length).toBe(3);
    expect(el.querySelector('[role="status"]')).toBeNull();
  });

  it('should reject an invalid email', async () => {
    setValue('#sug-email', 'no-es-correo');
    el.querySelector<HTMLInputElement>('#sug-email')!.dispatchEvent(new Event('blur'));
    await fixture.whenStable();
    expect(el.querySelector('#sug-email-error')).toBeTruthy();
  });

  it('should confirm a valid submission', async () => {
    setValue('#sug-name', 'Ana');
    setValue('#sug-email', 'ana@example.com');
    setValue('#sug-text', 'Una exposición de fotografía histórica.');
    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
    expect(el.querySelector('[role="status"]')).toBeTruthy();
    expect(el.querySelectorAll('.error').length).toBe(0);
  });
});
