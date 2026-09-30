import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { NavigationService } from '../../core/services/navigation.service';
import { SectionLayout } from '../../shared/components/section-layout/section-layout';
import { TourViewer } from '../../shared/components/tour-viewer/tour-viewer';

@Component({
  selector: 'cvp-tour-page',
  imports: [SectionLayout, TourViewer],
  templateUrl: './tour-page.html',
  styleUrl: './tour-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TourPage {
  protected readonly page = inject(NavigationService).current;
}
