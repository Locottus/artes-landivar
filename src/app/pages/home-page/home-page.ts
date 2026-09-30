import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { SITE } from '../../core/config/site.config';
import { NavItem } from '../../core/models/nav-item';
import { NavigationService } from '../../core/services/navigation.service';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';

const HIGHLIGHT_PATHS = [
  '/museo-virtual/patrimonio-del-semestre',
  '/museo-virtual/agenda',
  '/patrimonio-guatemalteco/bic/tours-360',
];

@Component({
  selector: 'cvp-home-page',
  imports: [RouterLink, FeatureCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly router = inject(Router);
  private readonly nav = inject(NavigationService);

  protected readonly site = SITE;
  /** Bloques "Chispudo": secciones principales con contenido propio. */
  protected readonly sections = this.nav.items.filter((item) => item.children.length);
  protected readonly highlights = HIGHLIGHT_PATHS.map((path) => this.nav.findByPath(path)).filter(
    (item): item is NavItem => item !== undefined,
  );

  protected search(event: Event, term: string): void {
    event.preventDefault();
    this.router.navigate(['/buscar'], { queryParams: { q: term.trim() || null } });
  }
}
