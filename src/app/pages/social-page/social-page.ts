import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE } from '../../core/config/site.config';
import { SectionLayout } from '../../shared/components/section-layout/section-layout';

@Component({
  selector: 'cvp-social-page',
  imports: [SectionLayout],
  templateUrl: './social-page.html',
  styleUrl: './social-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialPage {
  protected readonly social = SITE.social;
}
