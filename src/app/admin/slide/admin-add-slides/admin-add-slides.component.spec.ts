import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSlidesComponent } from './admin-add-slides.component';

describe('AdminAddSlidesComponent', () => {
  let component: AdminAddSlidesComponent;
  let fixture: ComponentFixture<AdminAddSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSlidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
