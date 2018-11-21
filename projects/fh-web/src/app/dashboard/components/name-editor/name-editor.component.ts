import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Person } from '../../models/person';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameEditorComponent {
  @Input()
  person: Person;

  @Output()
  reset = new EventEmitter<void>();

  counter = 0;

  get detectChangeDetection() {
    console.log('change det');
    return;
  }

  resetName(): void {
    this.reset.emit();
  }

  add(): void {
    this.counter++;
  }
}
