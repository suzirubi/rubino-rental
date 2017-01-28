import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.model';
import { Router } from '@angular/router';
import { ExpenseService } from '../expense.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
  providers: [ExpenseService]
})
export class ExpenseListComponent implements OnInit {
  expenses: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  filterByType: string = "allExpenses";

  onChange(optionFromMenu) {
    this.filterByType = optionFromMenu;
  }

  constructor (private router: Router, private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenses = this.expenseService.getExpenses();
  }

  goToDetailPage(clickedExpense) {
    this.router.navigate(['expenses', clickedExpense.$key]);
  };

}
