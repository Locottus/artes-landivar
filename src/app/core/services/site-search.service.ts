import { httpResource } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';

import { normalizeText } from '../utils/text';

export interface SearchIndexEntry {
  label: string;
  path: string;
  description?: string;
  tags: string[];
}

/** Buscador del header basado en el índice `public/data/search-index.json`. */
@Injectable({ providedIn: 'root' })
export class SiteSearchService {
  private readonly requested = signal(false);

  // El índice solo se descarga la primera vez que se abre el buscador.
  private readonly index = httpResource<SearchIndexEntry[]>(
    () => (this.requested() ? 'data/search-index.json' : undefined),
    { defaultValue: [] },
  );

  private readonly entries = computed(() =>
    this.index.value().map((entry) => ({
      entry,
      label: normalizeText(entry.label),
      tags: normalizeText(entry.tags.join(' ')),
      description: normalizeText(entry.description ?? ''),
    })),
  );

  readonly isLoading = this.index.isLoading;
  readonly hasError = computed(() => this.index.error() !== undefined);

  load(): void {
    this.requested.set(true);
  }

  search(term: string, limit = 8): SearchIndexEntry[] {
    const words = normalizeText(term).split(/\s+/).filter(Boolean);
    if (!words.length) {
      return [];
    }

    return this.entries()
      .map(({ entry, label, tags, description }) => {
        let score = 0;
        for (const word of words) {
          const wordScore =
            (label.includes(word) ? 3 : 0) +
            (tags.includes(word) ? 2 : 0) +
            (description.includes(word) ? 1 : 0);
          if (!wordScore) {
            return { entry, score: 0 };
          }
          score += wordScore + (label.startsWith(word) ? 1 : 0);
        }
        return { entry, score };
      })
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((result) => result.entry);
  }
}
