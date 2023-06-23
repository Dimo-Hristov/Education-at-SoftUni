import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  myProp = 'Hello World';
  constructor() {
    setTimeout(() => {
      this.myProp = 'Hello other World!';
    }, 1000);
  }
}
