import { NgModule } from '@angular/core';

import { FhSharedUiComponent } from './fh-shared-ui.component';
import { FhHeaderComponent } from './fh-header/fh-header.component';

const components = [FhSharedUiComponent, FhHeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [],
  exports: [...components]
})
export class FhSharedUiModule {}
