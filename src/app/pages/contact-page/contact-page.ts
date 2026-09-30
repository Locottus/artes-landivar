import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE } from '../../core/config/site.config';
import { SectionLayout } from '../../shared/components/section-layout/section-layout';

@Component({
  selector: 'cvp-contact-page',
  imports: [SectionLayout],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  protected readonly contact = SITE.contact;
}
