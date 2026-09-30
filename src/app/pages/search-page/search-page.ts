import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { NavigationService } from '../../core/services/navigation.service';
import { SearchService } from '../../core/services/search.service';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'cvp-search-page',
  imports: [RouterLink, PageHero],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
  private readonly router = inject(Router);
  private readonly nav = inject(NavigationService);
  private readonly searchService = inject(SearchService);

  /** Enlazado desde el query param `?q=` (withComponentInputBinding). */
  readonly q = input<string | undefined>();

  protected readonly term = computed(() => this.q()?.trim() ?? '');
  protected readonly results = computed(() =>
    this.searchService.search(this.term()).map((item) => ({
      item,
      trail: this.nav
        .trail(item.path)
        .slice(0, -1)
        .map((parent) => parent.label)
        .join(' › '),
    })),
  );

  protected search(event: Event, term: string): void {
    event.preventDefault();
    this.router.navigate([], { queryParams: { q: term.trim() || null }, replaceUrl: true });
  }
}
