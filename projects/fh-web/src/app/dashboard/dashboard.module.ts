import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';

@NgModule({
  declarations: [DashboardComponent, NameEditorComponent],
  imports: [DashboardRoutingModule, FormsModule]
})
export class DashboardModule {}
