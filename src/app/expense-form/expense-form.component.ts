import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../service/expense.service';
import { Expense } from '../../../Backend/mock-data';
import { MatDialog } from '@angular/material/dialog';
import { AddExpenseDlgComponent } from '../add-expense-dlg/add-expense-dlg.component';

@Component({
  selector: 'app-expense-form',
  imports: [CommonModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.scss'
})
export class ExpenseFormComponent {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService
  ) { }

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((data: Expense[]) => {
      this.expenses = data;
      console.log(this.expenses);
    });
  }

  // openAddExpenseDialog(): void {
  //   const dialogRef = this.dialog.open(AddExpenseDlgComponent);
  //   dialogRef.afterClosed().subscribe((result: Expense) => {
  //     if (result) {
  //       this.addExpense(result);
  //     }
  //   }
  //   );
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
