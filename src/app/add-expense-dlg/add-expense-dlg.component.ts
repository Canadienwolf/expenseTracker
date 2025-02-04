import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Expense } from '../../../Backend/mock-data';

@Component({
  selector: 'app-add-expense-dlg',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-expense-dlg.component.html',
  styleUrl: './add-expense-dlg.component.scss'
})


export class AddExpenseDlgComponent {
  expenses: Expense[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddExpenseDlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Expense
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // Pass the expense data back when dialog closes
    this.dialogRef.close(this.expenses);
  }
}
