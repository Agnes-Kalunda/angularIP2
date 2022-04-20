import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user:any=[];
  repo: any=[];
  username!:string;

  // @Output() newUsername=new EventEmitter ()
  // username:string = ''

 
  searchUser() {
    this.getApiService.addUser(this.username)
    this.getApiService.getUsers().subscribe(user => {
      this.user = user;
    })
    this.getApiService.getUserRepo().subscribe(repo => {
      this.repo = repo;
    })
  }


  constructor(private getApiService:GetApiService) { }

  ngOnInit(): void {
  }}