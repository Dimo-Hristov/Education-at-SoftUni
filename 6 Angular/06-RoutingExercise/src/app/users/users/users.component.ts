import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: [] = [];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
