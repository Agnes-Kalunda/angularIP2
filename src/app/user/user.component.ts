import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any=[];
  repos:any =[];
  username!:string;

  constructor(private userService:UserService) {
    this.userService.getUser().subscribe(users=>{
      this.users=users
    })
    this.userService.getRepo().subscribe(repos=>{
      this.repos = repos
      })

    }
    
    searchInfo(){
      this.userService.updateUser(this.username)
      this.userService.getUser().subscribe(users=>{
       this.users = users
       })
       this.userService.getRepo().subscribe(repos=>{
         this.repos = repos
       })
    }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
   }

  


