import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../service/expense.service';
import { Expense } from '../../../Backend/mock-data';

// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { AddExpenseDlgComponent } from '../add-expense-dlg/add-expense-dlg.component';

@Component({
  selector: 'app-expense-form',
  imports: [
    CommonModule,
    // MatDialogModule



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
    // private dialog: MatDialog

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

  // openAddExpenseDialog(): void {
  //   const dialogRef = this.dialog.open(AddExpenseDlgComponent);
  //   dialogRef.afterClosed().subscribe((result: Expense) => {
  //     if (result) {
  //       this.addExpense(result);
  //     }
  //   });
  // }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.expenses = this.expenses.filter(expense => expense.id !== id);
    });
  }

  editExpense(editExpense: Expense): void {
    const index = this.expenses.findIndex(expense => expense.id === editExpense.id);
    if (index !== -1) {
      this.expenses[index] = editExpense;
    }
  }
}
