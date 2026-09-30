import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cvp-page-hero',
  templateUrl: './page-hero.html',
  styleUrl: './page-hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHero {
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly eyebrow = input<string>();
}
