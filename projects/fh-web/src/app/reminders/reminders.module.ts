import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemindersRoutingModule } from './reminders-routing.module';

import { RemindersComponent } from './containers/reminders/reminders.component';

import { ReminderComponent } from './components/reminder/reminder.component';
import { ReminderFormComponent } from './components/reminder-form/reminder-form.component';
import { ReminderListComponent } from './components/reminder-list/reminder-list.component';
import { FormsModule } from '@angular/forms';

import { ReminderService } from './services/reminder.service';

@NgModule({
  imports: [CommonModule, RemindersRoutingModule, FormsModule],
  declarations: [
    RemindersComponent,
    ReminderListComponent,
    ReminderComponent,
    ReminderFormComponent
  ],
  providers: [ReminderService]
})
export class RemindersModule {}
