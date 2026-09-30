import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SITE } from '../../core/config/site.config';
import { SectionLayout } from '../../shared/components/section-layout/section-layout';

@Component({
  selector: 'cvp-about-page',
  imports: [SectionLayout, RouterLink],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  protected readonly site = SITE;
}
