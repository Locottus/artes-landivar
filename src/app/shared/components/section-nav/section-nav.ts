import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavItem } from '../../../core/models/nav-item';

/** Submenú lateral con el árbol de la sección activa. */
@Component({
  selector: 'cvp-section-nav',
  imports: [RouterLink, RouterLinkActive, NgTemplateOutlet],
  templateUrl: './section-nav.html',
  styleUrl: './section-nav.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionNav {
  readonly section = input.required<NavItem>();
  protected readonly expanded = signal(false);

  protected toggle(): void {
    this.expanded.update((value) => !value);
  }
}
