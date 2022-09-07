import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCategoryMainComponent } from './user-category-main.component';

describe('UserCategoryMainComponent', () => {
  let component: UserCategoryMainComponent;
  let fixture: ComponentFixture<UserCategoryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCategoryMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCategoryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
