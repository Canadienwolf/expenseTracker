import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Expense } from '../expense';
import { NgbActiveModal, NgbModal  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-expense-dlg',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-expense-dlg.component.html',
  styleUrl: './add-expense-dlg.component.scss'
})

export class AddExpenseDlgComponent {
  expenses: Expense = {id: 0, amount: 0, date: new Date(), category:'', description: ''};
  activeModal = inject(NgbActiveModal);

  constructor(
  ) {}

  onSave(): void {
    this.activeModal.close(this.expenses);
  }

  setDate(event: Event): void {
    this.expenses.date = new Date((event.target as HTMLInputElement).value);
  }
}
