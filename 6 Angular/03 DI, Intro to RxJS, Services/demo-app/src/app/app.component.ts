import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-app';

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.userService.users = users;
    });
  }
}
