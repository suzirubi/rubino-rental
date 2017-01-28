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
  addRental(newRental: Rental) {
  this.rentals.push(newRental);
  }
  deleteRental(localRentalToDelete){
    var rentalEntryInFirebase = this.getRentalById(localRentalToDelete.$key);
    rentalEntryInFirebase.remove();
  }
  updateRental(localUpdatedRental) {
    var rentalEntryInFirebase = this.getRentalById(localUpdatedRental.$key);
      rentalEntryInFirebase.update({rentaltype: localUpdatedRental.rentaltype,
                                    title: localUpdatedRental.title,
                                    description: localUpdatedRental.description,
                                    street: localUpdatedRental.street,
                                    citystatezip: localUpdatedRental.citystatezip,
                                    hero: localUpdatedRental.hero,
                                    bedroom: localUpdatedRental.bedroom,
                                    bath: localUpdatedRental.bath,
                                    rent: localUpdatedRental.rent,
                                    deposit: localUpdatedRental.deposit,
                                    pets: localUpdatedRental.pet,
                                    contact: localUpdatedRental.contact
                                    });
  }
}
