import { Component, OnInit } from '@angular/core';
import { Rental } from '../rental.model';
import { Router } from '@angular/router';
import { RentalService } from '../rental.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
  providers: [RentalService]
})
export class RentalListComponent implements OnInit {
  rentals: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor (private router: Router, private rentalService: RentalService) { }

  ngOnInit() {
    this.rentals = this.rentalService.getRentals();
  }

  goToDetailPage(clickedRental) {
    this.router.navigate(['rentals', clickedRental.$key]);
  };

}
