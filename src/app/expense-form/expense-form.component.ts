import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../service/expense.service';
import { Expense } from '../expense';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddExpenseDlgComponent } from '../add-expense-dlg/add-expense-dlg.component';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.scss'
})

export class ExpenseFormComponent {
  expenses: Expense[] = [];

    // Sorting variables
    sortColumn = '';
    sortDirection: 'asc' | 'desc' = 'asc';

  constructor(
    private expenseService: ExpenseService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((data: Expense[]) => {
      this.expenses = data;
      console.log(this.expenses);
    });
  }

  sortTable(column: keyof Expense): void {
    if (this.sortColumn === column) {
      // Toggle the sort direction if the same column header is clicked.
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Default to ascending order if sorting a new column.
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.expenses.sort((a, b) => {
      let aValue = a[column];
      let bValue = b[column];

      // For dates, convert to number.
      if (column === 'date') {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }

      if (aValue < bValue) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  openExpenseDlg() {
    const modalRef = this.modalService.open(AddExpenseDlgComponent);
    modalRef.closed.subscribe((result: Expense) => {
      if (result) {
        this.addExpense(result);
      }
    });
  }

  addExpense(expense: Expense) {
    this.expenseService.addExpense(expense).subscribe((data: Expense) => {
      this.expenses.push(data);
    });
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.expenses = this.expenses.filter(expense => expense.id !== id);
    });
  }

  editExpense(editExpense: Expense): void {
    const expense = { ...editExpense };
    const modalRef = this.modalService.open(AddExpenseDlgComponent);
    modalRef.componentInstance.expenses = expense;
    modalRef.closed.subscribe((result: Expense) => {
      if (result) {
        const index = this.expenses.findIndex(expense => expense.id === editExpense.id);
        this.expenseService.editExpense(result).subscribe(() => {
          if (index !== -1) {
            this.expenses[index] = result;
         }
        });
      }
    });



  }
}
