import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCourtComponent } from './mobile-court.component';

describe('MobileCourtComponent', () => {
  let component: MobileCourtComponent;
  let fixture: ComponentFixture<MobileCourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
