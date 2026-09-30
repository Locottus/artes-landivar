import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { NavigationService } from '../../../core/services/navigation.service';
import { PageHero } from '../page-hero/page-hero';
import { SectionNav } from '../section-nav/section-nav';

/** Estructura común de las páginas internas: hero + submenú de sección + contenido. */
@Component({
  selector: 'cvp-section-layout',
  imports: [PageHero, SectionNav],
  templateUrl: './section-layout.html',
  styleUrl: './section-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionLayout {
  private readonly nav = inject(NavigationService);

  protected readonly page = this.nav.current;
  protected readonly section = computed(() => {
    const section = this.nav.currentSection();
    return section?.children.length ? section : undefined;
  });
  protected readonly eyebrow = computed(() => {
    const section = this.nav.currentSection();
    return section && section !== this.page() ? section.label : undefined;
  });
}
