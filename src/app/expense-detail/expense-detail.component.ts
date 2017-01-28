import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense.service';
import { FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css'],
  providers: [ExpenseService]
})

export class ExpenseDetailComponent implements OnInit {
  expenseId: string;
  expenseToDisplay;


  constructor(private route: ActivatedRoute,
              private location: Location,
              private expenseService: ExpenseService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
    this.expenseId = urlParametersArray['id'];
    });
    this.expenseToDisplay = this.expenseService.getExpenseById(this.expenseId);
  }

}
