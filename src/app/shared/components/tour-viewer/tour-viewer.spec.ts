import { TestBed } from '@angular/core/testing';

import { TourViewer } from './tour-viewer';

describe('TourViewer', () => {
  it('should render the caption', async () => {
    const fixture = TestBed.createComponent(TourViewer);
    fixture.componentRef.setInput('title', 'Manchén');
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('figcaption')?.textContent).toContain(
      'Manchén',
    );
  });
});
