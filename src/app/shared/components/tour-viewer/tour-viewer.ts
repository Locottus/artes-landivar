import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Visor de recorridos virtuales 360°.
 * TODO: integrar Pannellum o Three.js usando `panoramaUrl` (imagen equirectangular).
 */
@Component({
  selector: 'cvp-tour-viewer',
  templateUrl: './tour-viewer.html',
  styleUrl: './tour-viewer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TourViewer {
  readonly title = input.required<string>();
  readonly panoramaUrl = input<string>();
}
