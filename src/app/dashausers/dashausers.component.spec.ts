import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashausersComponent } from './dashausers.component';

describe('DashausersComponent', () => {
  let component: DashausersComponent;
  let fixture: ComponentFixture<DashausersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashausersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashausersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
