import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RemindersComponent } from './containers/reminders/reminders.component';

const routes: Routes = [{ path: '', component: RemindersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemindersRoutingModule {}
