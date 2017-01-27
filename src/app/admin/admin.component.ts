import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RentalService } from '../rental.service';
import { Rental } from '../rental.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RentalService]
})
export class AdminComponent {
  rentals: FirebaseListObservable<any[]>;

  constructor(private rentalService: RentalService) {
  }

  submitForm(rentaltype: string, title: string, description: string, street: string, citystatezip: string, hero: string, bedroom: number, bath: number, rent: number, deposit: number, pet: string, contact: string){
    var newRental: Rental = new Rental(rentaltype, title, description, street, citystatezip, hero, bedroom, bath, rent, deposit, pet, contact);
    this.rentalService.addRental(newRental);
  }

}
