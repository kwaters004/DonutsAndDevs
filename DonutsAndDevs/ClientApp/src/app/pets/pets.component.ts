import { Component } from '@angular/core';

@Component({
    selector: 'app-pets',
    templateUrl: './pets.component.html',
    styleUrls: ['./pets.component.css']
})
/** pets component*/
export class PetsComponent {
  sh: boolean = false;

/** pets ctor */
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
