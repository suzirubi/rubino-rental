import { Injectable } from '@angular/core';
import { Expense } from './expense.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class ExpenseService {
  expenses: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.expenses = angularFire.database.list('/expenses');
  }
  getExpenses(){
  return this.expenses;
  }
  getExpenseById(expenseId: string) {
    return this.angularFire.database.object('/expenses/' + expenseId);
  }
  addExpense(newExpense: Expense) {
  this.expenses.push(newExpense);
  }
  deleteExpense(localExpenseToDelete){
    var expenseEntryInFirebase = this.getExpenseById(localExpenseToDelete.$key);
    expenseEntryInFirebase.remove();
  }
  updateExpense(localUpdatedExpense) {
    var expenseEntryInFirebase = this.getExpenseById(localUpdatedExpense.$key);
      expenseEntryInFirebase.update({category: localUpdatedExpense.category,
                                    type: localUpdatedExpense.type,
                                    description: localUpdatedExpense.description,
                                    amount: localUpdatedExpense.amount,
                                    image: localUpdatedExpense.image,
                                    comments: localUpdatedExpense.comments
                                    });
  }
}
