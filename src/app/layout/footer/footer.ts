import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SITE } from '../../core/config/site.config';
import { NavigationService } from '../../core/services/navigation.service';

@Component({
  selector: 'cvp-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly site = SITE;
  protected readonly items = inject(NavigationService).items;
  protected readonly year = new Date().getFullYear();
}
