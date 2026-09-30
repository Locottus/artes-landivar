import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import { SITE_MAP } from '../data/navigation.data';
import { NavItem } from '../models/nav-item';
import { flattenNav, normalizePath } from '../navigation/nav-utils';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly router = inject(Router);
  private readonly index = new Map<string, NavItem>(
    flattenNav(SITE_MAP).map((item) => [item.path, item]),
  );

  readonly items: readonly NavItem[] = SITE_MAP;

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly currentPath = computed(() => normalizePath(this.url()));
  readonly current = computed(() => this.findByPath(this.currentPath()));
  readonly breadcrumbs = computed(() => this.trail(this.currentPath()));
  /** Sección de primer nivel a la que pertenece la página actual. */
  readonly currentSection = computed<NavItem | undefined>(() => this.breadcrumbs()[0]);

  findByPath(path: string): NavItem | undefined {
    return this.index.get(normalizePath(path));
  }

  /** Cadena de ancestros (incluida la propia página) para una ruta. */
  trail(path: string): NavItem[] {
    const segments = normalizePath(path).split('/').filter(Boolean);
    return segments
      .map((_, i) => this.index.get('/' + segments.slice(0, i + 1).join('/')))
      .filter((item): item is NavItem => item !== undefined);
  }
}
