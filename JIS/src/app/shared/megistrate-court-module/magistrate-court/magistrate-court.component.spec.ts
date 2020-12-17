import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagistrateCourtComponent } from './magistrate-court.component';

describe('MagistrateCourtComponent', () => {
  let component: MagistrateCourtComponent;
  let fixture: ComponentFixture<MagistrateCourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagistrateCourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagistrateCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
