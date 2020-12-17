import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallClaimCourtComponent } from './small-claim-court.component';

describe('SmallClaimCourtComponent', () => {
  let component: SmallClaimCourtComponent;
  let fixture: ComponentFixture<SmallClaimCourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallClaimCourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallClaimCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
