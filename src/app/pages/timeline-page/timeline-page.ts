import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { TIMELINES } from '../../core/data/timeline.data';
import { NavigationService } from '../../core/services/navigation.service';
import { SectionLayout } from '../../shared/components/section-layout/section-layout';
import { Timeline } from '../../shared/components/timeline/timeline';

@Component({
  selector: 'cvp-timeline-page',
  imports: [SectionLayout, Timeline],
  templateUrl: './timeline-page.html',
  styleUrl: './timeline-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelinePage {
  private readonly nav = inject(NavigationService);
  protected readonly entries = computed(() => TIMELINES[this.nav.currentPath()] ?? []);
}
