import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
