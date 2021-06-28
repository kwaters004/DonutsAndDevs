import { Component } from '@angular/core';

@Component({
    selector: 'app-pet-details',
    templateUrl: './pet-details.component.html',
    styleUrls: ['./pet-details.component.css']
})
/** pet-details component*/
export class PetDetailsComponent {
    /** pet-details ctor */

  sh: boolean = false;


  constructor() {

  }

  showPets() {
    if (this.sh) {
      this.sh = false;
      return;
    }
    this.sh = true;
  }
}
