import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSlidesComponent } from './admin-edit-slides.component';

describe('AdminEditSlidesComponent', () => {
  let component: AdminEditSlidesComponent;
  let fixture: ComponentFixture<AdminEditSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditSlidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
