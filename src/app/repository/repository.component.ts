import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  users: any =[]
  repos:any =[];
  username!:any;
  userService: any;
  

  constructor() {
    this.userService.getUser().subscribe((users: any)=>{
      this.users = users
      })
      this.userService.getRepo().subscribe((repos: any)=>{
        this.repos = repos
        })
   }
searchInfo(){
  this.userService.updateRepo(this.repos)
      this.userService.getRepo().subscribe((repos: any)=>{
        this.repos = repos
        })
}
  ngOnInit(): void {
  }

}
