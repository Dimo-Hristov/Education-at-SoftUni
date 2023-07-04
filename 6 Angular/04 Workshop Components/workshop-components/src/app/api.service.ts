import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    const { appUrl } = environment;
    return this.http.get(`${appUrl}/themes`);
  }
  getThemes(limit?: number) {
    const { appUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get(`${appUrl}/posts${limitFilter}`);
  }
}
