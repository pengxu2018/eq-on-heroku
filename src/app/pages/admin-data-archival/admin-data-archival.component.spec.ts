import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDataArchivalComponent } from './admin-data-archival.component';

describe('AdminDataArchivalComponent', () => {
  let component: AdminDataArchivalComponent;
  let fixture: ComponentFixture<AdminDataArchivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDataArchivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDataArchivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
