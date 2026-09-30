import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type SuggestionField = 'name' | 'email' | 'suggestion';

@Component({
  selector: 'cvp-suggestion-form',
  imports: [ReactiveFormsModule],
  templateUrl: './suggestion-form.html',
  styleUrl: './suggestion-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestionForm {
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
    suggestion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
  });

  protected readonly submitted = signal(false);

  protected hasError(field: SuggestionField): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: enviar this.form.getRawValue() al servicio/API de sugerencias.
    this.submitted.set(true);
    this.form.reset();
  }
}
