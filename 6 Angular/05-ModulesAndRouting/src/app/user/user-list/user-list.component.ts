import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  usersList: User[] = [];

  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.globalLoaderService.showLoader();

    setTimeout(() => {
      this.userService.getUsers().subscribe({
        next: (users) => {
          this.usersList = users;
        },
        error: (err) => {
          console.error(`Error: ${err}`);
          this.globalLoaderService.hideLoader();
        },
        complete: () => {
          this.globalLoaderService.hideLoader();
        },
      });
    }, 2000);
  }
}
