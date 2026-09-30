import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Tarjeta "Chispudo": bloque de acceso a una sección o contenido. */
@Component({
  selector: 'cvp-feature-card',
  imports: [RouterLink],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCard {
  readonly title = input.required<string>();
  readonly link = input.required<string>();
  readonly description = input<string>();
  readonly image = input<string>();
  readonly imageAlt = input('');
  readonly tag = input<string>();
  readonly variant = input<'default' | 'feature'>('default');
}
