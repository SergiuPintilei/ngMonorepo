import { TestBed } from '@angular/core/testing';

import { FhSharedUiService } from './fh-shared-ui.service';

describe('FhSharedUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FhSharedUiService = TestBed.get(FhSharedUiService);
    expect(service).toBeTruthy();
  });
});
