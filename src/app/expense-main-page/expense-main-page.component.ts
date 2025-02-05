import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../service/expense.service';
import { Expense } from '../expense';
import { Chart, ChartConfiguration, registerables } from 'chart.js';


// Register all necessary controllers, elements, scales, and plugins.
Chart.register(...registerables);

@Component({
  selector: 'app-expense-main-page',
  imports: [
    CommonModule
],
  templateUrl: './expense-main-page.component.html',
  styleUrl: './expense-main-page.component.scss'
})
export class ExpenseMainPageComponent {
  expenses: Expense[] = [];
  chart: Chart | undefined;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    // Get expenses and then create a pie chart
    this.expenseService.getExpenses().subscribe((data: Expense[]) => {
      this.expenses = data;
      this.createPieChart();
    });
  }

  // Aggregate expenses by category
  private aggregateByCategory(): { labels: string[], data: number[] } {
    const aggregation: Record<string, number> = {};
    this.expenses.forEach(expense => {
      aggregation[expense.category] = (aggregation[expense.category] || 0) + expense.amount;
    });
    const labels = Object.keys(aggregation);
    const data = labels.map(label => aggregation[label]);
    return { labels, data };
  }

  // Create pie chart using Chart.js
  private createPieChart(): void {
    const { labels, data } = this.aggregateByCategory();
    const chartData: ChartConfiguration<'pie'> = {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC', '#FF7043', '#26C6DA'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D', '#BA68C8', '#FF8A65', '#4DD0E1']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    };

    const ctx = document.getElementById('expensePieChart') as HTMLCanvasElement;
    if (ctx) {
      this.chart = new Chart(ctx, chartData);
    }
  }
}
