import { Component } from '@angular/core';
import { User } from './types/user-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-app';

  users: User[] = [
    { name: 'Pesho', age: 51, email: 'asdasd@abv.bg' },
    { name: 'Gosho', age: 41, email: 'asdasd@abv.bg' },
    { name: 'Ceko', age: 31, email: 'asdasd@abv.bg' },
    { name: 'Ivan', age: 21, email: 'asdasd@abv.bg' },
  ];
}