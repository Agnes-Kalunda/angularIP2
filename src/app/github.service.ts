import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'console';
import { CLIENT_ID , CLIENT_SECRET } from 'credentials/GithubCred';
import { throwError } from 'rxjs';
import { retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }
  public getProfile(){
    let dataURL = 'https://api.github.com/users/${searchQuery}?client_id= ${CLIENT_ID}%client_secret= ${CLIENT_SECRET}';
  return this.httpClient.get(dataURL).pipe(
    retry(count: 1),
  );
  }

  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      errorMessage = 'MESSAGE: ${error.error.message}';

    }
    else{
      errorMessage = 'STATUS : $(error.status)MESSAGE:${error.message}';

    }
    return throwError(errorMessage);

  }
}


