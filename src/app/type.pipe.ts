import { Pipe, PipeTransform } from '@angular/core';
import { Rental } from './rental.model';

@Pipe({
  name: 'type',
  pure: false
})


export class TypePipe implements PipeTransform {


  transform(input: Rental[], desiredType) {
    var output: Rental[] = [];
    if (desiredType === "long-term") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].rentaltype === "long-term") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === "short-term") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].rentaltype === "short-term") {
          output.push(input[i]);
        }
      }
      return output
    } else {
      return input;
    }
  }

}
