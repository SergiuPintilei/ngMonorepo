import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';

import { Reminder } from '../models/reminder';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private data: Reminder[] = [
    {
      description: 'Order cake for Ana',
      done: false
    },
    {
      description: 'Walk dog',
      done: false
    },
    {
      description: 'Research for Math exam',
      done: false
    },
    {
      description: 'Win a million dollars',
      done: false
    },
    {
      description: 'Call mom',
      done: false
    }
  ];

  private _reminders = new BehaviorSubject<Reminder[]>(this.data);
  reminders$ = this._reminders.asObservable();

  completeReminder(event: Reminder): void {
    const currentValue = this._reminders.getValue();

    this._reminders.next(
      currentValue.map(item => {
        if (item.description === event.description) {
          item.done = !item.done;
        }
        return item;
      })
    );
  }

  addReminder(event: string): void {
    const currentValue = this._reminders.getValue();

    this._reminders.next([
      {
        description: event,
        done: false
      },
      ...currentValue
    ]);
  }
}
