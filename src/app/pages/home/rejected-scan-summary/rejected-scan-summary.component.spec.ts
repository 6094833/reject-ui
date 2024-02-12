import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedScanSummaryComponent } from './rejected-scan-summary.component';

describe('RejectedScanSummaryComponent', () => {
  let component: RejectedScanSummaryComponent;
  let fixture: ComponentFixture<RejectedScanSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RejectedScanSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RejectedScanSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
