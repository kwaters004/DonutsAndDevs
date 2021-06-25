import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-famous-people',
    templateUrl: './famous-people.component.html',
    styleUrls: ['./famous-people.component.css']
})
/** famous-people component*/
export class FamousPeopleComponent {
/** famous-people ctor */
  http: HttpClient = null;
  famousPeople = null;





    constructor(http: HttpClient) {
      this.http = http;
      this.loadFamousPeople();
  }


  loadFamousPeople() {
    this.http.get<any>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json').subscribe(result => {
      this.famousPeople = result;
    }, error => {
        console.log(error);
    })
  }



}
