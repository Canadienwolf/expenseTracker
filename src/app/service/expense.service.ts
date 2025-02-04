import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../../../Backend/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'https://localhost:44331/expense';

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }

  getExpense(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.apiUrl}/${id}`);
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense);
  }

  deleteExpense(id: number): Observable<Expense> {
    return this.http.delete<Expense>(`${this.apiUrl}/${id}`);
  }

  editExpense(editExpense: Expense): Observable<Expense> {
    return this.http.put<Expense>(`${this.apiUrl}/${editExpense.id}`, editExpense);
  }
}
