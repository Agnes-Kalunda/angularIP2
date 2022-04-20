import { Component, OnInit, HostListener } from '@angular/core';
import { GetApiService } from '../get-api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {

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







  // getData(newUsername:any):void{
  //   this.username = newUsername;
  //   this.getRepoData=(newUsername)
  //   this.getUserData =(newUsername)



  // }

  // getRepoData(username:string):void{
  //   this.getApiService.getUserRepo(username).subscribe((repo)=>{
  //     this.repo = repo
  //     console.log(repo)
  //   })
  // }

  // getUserData(username:string):void{
  //   this.getApiService.searchUsers(username).then((user) =>(this.user = user))
  //   console.log(username)
  // }


