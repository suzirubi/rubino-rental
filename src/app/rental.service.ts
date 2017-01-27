import { Injectable } from '@angular/core';
import { Rental } from './rental.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class RentalService {
  rentals: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.rentals = angularFire.database.list('/rentals');
  }
  getRentals(){
  return this.rentals;
  }
  getRentalById(rentalId: string) {
    return this.angularFire.database.object('/rentals/' + rentalId);
  }
}
