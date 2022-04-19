import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-profile-data',
  templateUrl: './github-profile-data.component.html',
  styleUrls: ['./github-profile-data.component.css']
})
export class GithubProfileDataComponent implements OnInit {
  public githubProfile : any = [];
  

  


  constructor() { }

  ngOnInit(): void {
  }

}
