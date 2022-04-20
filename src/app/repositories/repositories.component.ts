import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  username!: string;

  user: any = [];
  repo: any = [];

  constructor(private getApiService: GetApiService) {

    this.getApiService.getUsers().subscribe(user => {
      this.user = user;
    })
    this.getApiService.getUserRepo().subscribe(repo => {
      this.repo = repo;
    })
  }

  searchUser() {
    this.getApiService.addUser(this.username)
    this.getApiService.getUsers().subscribe(user => {
      this.user = user;
    })
    this.getApiService.getUserRepo().subscribe(repo => {
      this.repo = repo;
    })
  }
 
 
 
 
 
  ngOnInit(): void {

    

  }


}