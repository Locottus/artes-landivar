import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { NavigationService } from '../../core/services/navigation.service';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { SectionLayout } from '../../shared/components/section-layout/section-layout';

/** Página genérica de sección: muestra sus subsecciones como tarjetas "Chispudo". */
@Component({
  selector: 'cvp-section-page',
  imports: [SectionLayout, FeatureCard],
  templateUrl: './section-page.html',
  styleUrl: './section-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionPage {
  protected readonly page = inject(NavigationService).current;
  protected readonly children = computed(() => this.page()?.children ?? []);
}
