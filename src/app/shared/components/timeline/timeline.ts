import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TimelineEntry } from '../../../core/models/content';

@Component({
  selector: 'cvp-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  readonly entries = input.required<readonly TimelineEntry[]>();
}
