import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Reminder } from '../../models/reminder';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReminderComponent {
  @Input()
  reminder: Reminder;

  @Output()
  done = new EventEmitter<Reminder>();
}
