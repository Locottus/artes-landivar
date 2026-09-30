import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { AGENDA_EVENTS, AGENDA_TAGS } from '../../core/data/agenda.data';
import { AgendaTag } from '../../core/models/content';
import { SectionLayout } from '../../shared/components/section-layout/section-layout';
import { SuggestionForm } from './suggestion-form/suggestion-form';

@Component({
  selector: 'cvp-agenda-page',
  imports: [SectionLayout, SuggestionForm, DatePipe],
  templateUrl: './agenda-page.html',
  styleUrl: './agenda-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendaPage {
  protected readonly tags = AGENDA_TAGS;
  protected readonly selectedTag = signal<AgendaTag | null>(null);
  protected readonly events = computed(() => {
    const tag = this.selectedTag();
    return AGENDA_EVENTS.filter((event) => !tag || event.tag === tag);
  });

  protected selectTag(tag: AgendaTag | null): void {
    this.selectedTag.set(tag);
  }
}
