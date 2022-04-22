import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username:string;
  user!:User;
  repos!:any;

  constructor(private http:HttpClient) { 
    this.username ='Agnes-Kalunda';
}
getUser(){
  return this.http.get('https://api.github.com/users/' + this.username)
  .pipe(map(result => result));
}

getRepo(){
  return this.http.get('https://api.github.com/users/' + this.username +'/repos')
  .pipe(map(result => result));
}
updateUser(username:string){
  this.username =username;
    }
    updateRepo(repos:any){
      this.repos=repos;
        }
      }


