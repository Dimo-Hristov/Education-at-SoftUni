import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
