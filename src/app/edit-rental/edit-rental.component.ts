import { Component, Input, OnInit } from '@angular/core';
import { Rental } from '../rental.model';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-edit-rental',
  templateUrl: './edit-rental.component.html',
  styleUrls: ['./edit-rental.component.css'],
  providers: [RentalService]
})
export class EditRentalComponent implements OnInit {
  @Input() rentalToDisplay;


  constructor(private rentalService: RentalService) {
 }

  ngOnInit() {
  }

  beginUpdatingRental(rentalToUpdate) {
    this.rentalService.updateRental(rentalToUpdate);
  }
  beginDeletingRental(rentalToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.rentalService.deleteRental(rentalToDelete);
    }
  }
}
