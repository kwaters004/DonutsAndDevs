import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
/** donuts component*/
export class DonutsComponent {

  http: HttpClient = null;
  donuts = null;


  /** donuts ctor */
  constructor(http: HttpClient) {
    this.http = http;
    this.getDonuts();
  }

  getDonuts() {
    this.http.get<any>('https://grandcircusco.github.io/demo-apis/donuts.json').subscribe(result => {
      this.donuts = result;
    }, error => {
      console.log(error);
    });
  }


}
