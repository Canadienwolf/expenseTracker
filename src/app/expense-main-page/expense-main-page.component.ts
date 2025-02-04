import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SideMenuComponent } from "../side-menu/side-menu.component";

@Component({
  selector: 'app-expense-main-page',
  imports: [
    CommonModule
],
  templateUrl: './expense-main-page.component.html',
  styleUrl: './expense-main-page.component.scss'
})
export class ExpenseMainPageComponent {

  constructor( ) { }

  ngOnInit(): void {

  }
}
