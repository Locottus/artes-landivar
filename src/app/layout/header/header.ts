import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SITE } from '../../core/config/site.config';
import { NavItem } from '../../core/models/nav-item';
import { NavigationService } from '../../core/services/navigation.service';

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

  protected readonly site = SITE;
  protected readonly items = this.nav.items;
  protected readonly menuOpen = signal(false);
  protected readonly openSubmenu = signal<string | null>(null);

  constructor() {
    effect(() => {
      this.nav.currentPath();
      untracked(() => this.closeAll());
    });
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
  }

  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.closeAll();
    }
  }
}
