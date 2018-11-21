import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Reminder } from '../../models/reminder';
import { ReminderService } from '../../services/reminder.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {
  reminders$: Observable<Reminder[]>;
  constructor(private reminderService: ReminderService) {}

  ngOnInit(): void {
    this.reminders$ = this.reminderService.reminders$;
  }

  handleAdd(event: string): void {
    this.reminderService.addReminder(event);
  }

  handleDone(event: Reminder): void {
    this.reminderService.completeReminder(event);
  }
}
