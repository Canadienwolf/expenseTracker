import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseMainPageComponent } from './expense-main-page.component';

describe('ExpenseMainPageComponent', () => {
  let component: ExpenseMainPageComponent;
  let fixture: ComponentFixture<ExpenseMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
