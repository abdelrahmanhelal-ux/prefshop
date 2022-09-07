import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelateSlidesComponent } from './admin-delate-slides.component';

describe('AdminDelateSlidesComponent', () => {
  let component: AdminDelateSlidesComponent;
  let fixture: ComponentFixture<AdminDelateSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDelateSlidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDelateSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
