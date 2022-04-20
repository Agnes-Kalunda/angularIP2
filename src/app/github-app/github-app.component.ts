import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
// import { error } from 'console';
import { GithubService } from '../get-api.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css'],
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepos: any[] = [];
  public errorMessage!: string;
  githubService: any;

  constructor(private Service: GithubService) { }


  searchUser() {
    this.Service.getProfile(this.githubUserQuery).subscribe(next((data: any)=> {
      this.githubProfile = data;
    }),
    // error.arguments(error)=> {
    //   this.errorMessage = error,

    );

    this.githubService.getRepos(this.githubUserQuery).subscribe(next((data: any) => {
      this.githubProfile = data;
}),
      // error.arguments(error) => {
      //   this.errorMessage = error,
);   
}

  ngOnInit(): void {
  }

}
function next(data: any): any {
  throw new Error('Function not implemented.');
}

function data(data: any): any {
  throw new Error('Function not implemented.');
}

