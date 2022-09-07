import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelateProductsComponent } from './admin-delate-products.component';

describe('AdminDelateProductsComponent', () => {
  let component: AdminDelateProductsComponent;
  let fixture: ComponentFixture<AdminDelateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDelateProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDelateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
