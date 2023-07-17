import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm): void {
    console.log(form.value);

    // TODO: for now we are not handling the data
    // this.userService.login();
    // this.router.navigate(['/']);
  }
}
