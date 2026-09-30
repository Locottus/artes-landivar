import { Injectable } from '@angular/core';

import { SITE_MAP } from '../data/navigation.data';
import { NavItem } from '../models/nav-item';
import { flattenNav } from '../navigation/nav-utils';
import { normalizeText } from '../utils/text';

/** Buscador local sobre el mapa del sitio. Sustituible por una API (Algolia, Lunr, etc.). */
@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly entries = flattenNav(SITE_MAP).map((item) => ({
    item,
    text: normalizeText(`${item.label} ${item.description ?? ''}`),
  }));

  search(term: string): NavItem[] {
    const query = normalizeText(term.trim());
    if (!query) {
      return [];
    }
    return this.entries.filter((entry) => entry.text.includes(query)).map((entry) => entry.item);
  }
}
