import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  user = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov',
    },
    {
      firstName: 'Petar',
      lastName: 'Petrov',
    },
  ];
  selectedUserIndex: null | number = null;

  showLastName = true;

  constructor() {}

  handleClickEvent(event: MouseEvent) {
    this.showLastName = !this.showLastName;
    console.log(event.target);
  }

  showSelectedIndex(): boolean | number {
    return this.selectedUserIndex === null ? -1 : this.selectedUserIndex >= 0;
  }
}
