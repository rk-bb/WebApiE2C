import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPredictionComponent } from './sales-prediction.component';

describe('SalesPredictionComponent', () => {
  let component: SalesPredictionComponent;
  let fixture: ComponentFixture<SalesPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
