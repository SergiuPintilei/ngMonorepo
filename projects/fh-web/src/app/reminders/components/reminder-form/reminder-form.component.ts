import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReminderFormComponent {
  value: string;

  @Output()
  add = new EventEmitter<string>();

  onAdd(): void {
    this.add.emit(this.value);
    this.value = '';
  }
}
