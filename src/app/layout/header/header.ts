import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { SITE } from '../../core/config/site.config';
import { NavItem } from '../../core/models/nav-item';
import { NavigationService } from '../../core/services/navigation.service';
import { SearchIndexEntry, SiteSearchService } from '../../core/services/site-search.service';

@Component({
  selector: 'cvp-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeAll()',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class Header {
  private readonly nav = inject(NavigationService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly router = inject(Router);
  private readonly siteSearch = inject(SiteSearchService);
  private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  protected readonly site = SITE;
  protected readonly items = this.nav.items;
  protected readonly menuOpen = signal(false);
  protected readonly openSubmenu = signal<string | null>(null);

  protected readonly searchOpen = signal(false);
  protected readonly query = signal('');
  protected readonly activeIndex = signal(-1);
  protected readonly searchLoading = this.siteSearch.isLoading;
  protected readonly searchError = this.siteSearch.hasError;
  protected readonly results = computed(() => this.siteSearch.search(this.query()));

  constructor() {
    effect(() => {
      this.nav.currentPath();
      untracked(() => this.closeAll());
    });

    effect(() => this.searchInput()?.nativeElement.focus());
  }

  protected toggleSearch(): void {
    const open = !this.searchOpen();
    this.closeAll();
    if (open) {
      this.siteSearch.load();
      this.searchOpen.set(true);
    }
  }

  protected onQueryInput(value: string): void {
    this.query.set(value);
    this.activeIndex.set(-1);
  }

  protected onSearchKeydown(event: KeyboardEvent): void {
    const total = this.results().length;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (total) this.activeIndex.update((i) => (i + 1) % total);
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (total) this.activeIndex.update((i) => (i <= 0 ? total - 1 : i - 1));
        break;
      case 'Enter': {
        event.preventDefault();
        const result = this.results()[Math.max(this.activeIndex(), 0)];
        if (result) this.goTo(result);
        break;
      }
    }
  }

  protected goTo(result: SearchIndexEntry): void {
    this.closeAll();
    this.router.navigateByUrl(result.path);
  }

  protected optionId(index: number): string {
    return `site-search-option-${index}`;
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected toggleSubmenu(path: string): void {
    this.openSubmenu.update((current) => (current === path ? null : path));
  }

  protected isActive(item: NavItem): boolean {
    const current = this.nav.currentPath();
    return current === item.path || current.startsWith(`${item.path}/`);
  }

  protected submenuId(item: NavItem): string {
    return `submenu${item.path.replaceAll('/', '-')}`;
  }

  closeAll(): void {
    this.menuOpen.set(false);
    this.openSubmenu.set(null);
    this.searchOpen.set(false);
    this.query.set('');
    this.activeIndex.set(-1);
  }

  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.closeAll();
    }
  }
}
