import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Reminder } from '../../models/reminder';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReminderListComponent {
  @Input()
  reminders: Reminder[] = [];

  @Output()
  done = new EventEmitter<Reminder>();
}
