import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutSentComponent } from './payout-sent.component';

describe('PayoutSentComponent', () => {
  let component: PayoutSentComponent;
  let fixture: ComponentFixture<PayoutSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoutSentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoutSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
