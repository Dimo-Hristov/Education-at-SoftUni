import { Injectable } from '@angular/core';
import { User } from './types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    { name: 'Pesho', age: 51, email: 'asdasd@abv.bg' },
    { name: 'Gosho', age: 41, email: 'asdasd@abv.bg' },
    { name: 'Ceko', age: 31, email: 'asdasd@abv.bg' },
    { name: 'Ivan', age: 21, email: 'asdasd@abv.bg' },
  ];

  constructor() {
    // Dummy users to check the refresh function
    // setInterval(() => {
    //   this.users.push({ name: 'Ivan', age: 21, email: 'asdasd@abv.bg' });
    // }, 2000);
  }

  addUser(
    inputNameEl: HTMLInputElement,
    inputAgeEl: HTMLInputElement,
    inputEmailEl: HTMLInputElement
  ) {
    const user = {
      name: inputNameEl.value,
      age: Number(inputAgeEl.value),
      email: inputEmailEl.value,
    };
    this.users = [...this.users, user];

    inputNameEl.value = '';
    inputAgeEl.value = '';
    inputEmailEl.value = '';
  }
}
