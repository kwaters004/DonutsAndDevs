import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-donut-detail',
    templateUrl: './donut-detail.component.html',
    styleUrls: ['./donut-detail.component.css']
})
/** donut-detail component*/
export class DonutDetailComponent {

  @Input() donutLink: string = null;

  aDonut = null;
  sh: boolean = false;
  http: HttpClient = null;

    /** donut-detail ctor */
    constructor(http: HttpClient) {
      this.http = http;
  }

  ngOnInit() {
    this.getDonutDetail(this.donutLink);
  }

  getDonutDetail(donutPage: string) {
    this.http.get<any>(donutPage).subscribe(result => {
      console.log(result);
      this.aDonut = result;

    },
      error => {
        console.log(error);
      });
  }

  changeShow() {
    if (this.sh) {
      this.sh = false;
    }
    else {
      this.sh = true;
    }
  }
}
