import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FhSharedUiComponent } from './fh-shared-ui.component';

describe('FhSharedUiComponent', () => {
  let component: FhSharedUiComponent;
  let fixture: ComponentFixture<FhSharedUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FhSharedUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FhSharedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
