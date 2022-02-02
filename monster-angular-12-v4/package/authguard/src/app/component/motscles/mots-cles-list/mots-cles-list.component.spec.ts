import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotsClesListComponent } from './mots-cles-list.component';

describe('MotsClesListComponent', () => {
  let component: MotsClesListComponent;
  let fixture: ComponentFixture<MotsClesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotsClesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotsClesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
