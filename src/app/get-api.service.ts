import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { lastValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs';
import { User } from './users';
@Injectable({
  providedIn: 'root',
})
export class GetApiService {

  username: string;
  users!: User;
  repo: any;

  base_url = 'https://api.github.com/'

  constructor(private http: HttpClient) {
    this.username = 'Agnes-kalunda';
  }
  getUsers() {
    return this.http.get(`${this.base_url}/users/` + this.username).pipe(map(result => result));
    //  lastValueFrom().then((response) => response);
  }
  getUserRepo() {
    return this.http.get(`${this.base_url}/users/` + this.username + "/repo").pipe(map(result => result));

  }
  addUser(username: string) {
    this.username = username;


  }
  addRepo(repo: any) {
    this.repo = repo;
  }
}
