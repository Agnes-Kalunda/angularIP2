import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery:string;

  constructor() { }
  public searchUser(){
     
  }

  ngOnInit(): void {
  }

}
