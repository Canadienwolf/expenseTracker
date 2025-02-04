import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseDlgComponent } from './add-expense-dlg.component';

describe('AddExpenseDlgComponent', () => {
  let component: AddExpenseDlgComponent;
  let fixture: ComponentFixture<AddExpenseDlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExpenseDlgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpenseDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
