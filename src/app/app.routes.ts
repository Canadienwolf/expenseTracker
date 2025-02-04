import { Routes } from '@angular/router';
import { ExpenseMainPageComponent } from './expense-main-page/expense-main-page.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ExpenseMainPageComponent },
  { path: 'expense-form', component: ExpenseFormComponent },


];
