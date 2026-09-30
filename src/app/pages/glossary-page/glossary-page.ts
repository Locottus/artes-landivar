import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { GLOSSARY_TERMS } from '../../core/data/glossary.data';
import { GlossaryTerm } from '../../core/models/content';
import { normalizeText } from '../../core/utils/text';
import { SectionLayout } from '../../shared/components/section-layout/section-layout';

interface GlossaryGroup {
  readonly letter: string;
  readonly terms: readonly GlossaryTerm[];
}

@Component({
  selector: 'cvp-glossary-page',
  imports: [SectionLayout, RouterLink],
  templateUrl: './glossary-page.html',
  styleUrl: './glossary-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlossaryPage {
  protected readonly filter = signal('');

  protected readonly groups = computed<GlossaryGroup[]>(() => {
    const query = normalizeText(this.filter().trim());
    const groups = new Map<string, GlossaryTerm[]>();

    [...GLOSSARY_TERMS]
      .filter((t) => !query || normalizeText(`${t.term} ${t.definition}`).includes(query))
      .sort((a, b) => a.term.localeCompare(b.term, 'es'))
      .forEach((t) => {
        const letter = normalizeText(t.term.charAt(0)).toUpperCase();
        groups.set(letter, [...(groups.get(letter) ?? []), t]);
      });

    return [...groups].map(([letter, terms]) => ({ letter, terms }));
  });

  protected onFilter(value: string): void {
    this.filter.set(value);
  }
}
