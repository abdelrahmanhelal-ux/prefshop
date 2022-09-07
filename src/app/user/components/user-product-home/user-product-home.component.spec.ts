import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductHomeComponent } from './user-product-home.component';

describe('UserProductHomeComponent', () => {
  let component: UserProductHomeComponent;
  let fixture: ComponentFixture<UserProductHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProductHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
