import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Rental } from '../rental.model';
import { RentalService } from '../rental.service';
import { FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css'],
  providers: [RentalService]
})

export class RentalDetailComponent implements OnInit {
  rentalId: string;
  rentalToDisplay;


  constructor(private route: ActivatedRoute,
              private location: Location,
              private rentalService: RentalService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
    this.rentalId = urlParametersArray['id'];
    });
    this.rentalToDisplay = this.rentalService.getRentalById(this.rentalId);
  }

}
