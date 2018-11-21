import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'lib-fh-header',
  templateUrl: './fh-header.component.html',
  styleUrls: ['./fh-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FhHeaderComponent {
  @Input()
  bgColor = '#000';
  @Input()
  title = 'Title';
}
