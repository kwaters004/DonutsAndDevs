import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-famous-person-detail',
    templateUrl: './famous-person-detail.component.html',
    styleUrls: ['./famous-person-detail.component.css']
})
/** famous-person-detail component*/
export class FamousPersonDetailComponent {

  @Input() theDev: any = null;
  showDetes: boolean = false;

    /** famous-person-detail ctor */
    constructor() {

  }

  showDetails() {
    if (this.showDetes) {
      this.showDetes = false;
    }
    else {
      this.showDetes = true;
    }
  }
}


// AIzaSyBIAO9ZUYPbhEAULU3mt25XD-qtUrlDeZ0 google api key
