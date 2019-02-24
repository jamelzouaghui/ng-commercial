import { Component, OnInit } from '@angular/core';
import {UserService} from './../../service/user.service';
import {Router,ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

import {Subject} from 'rxjs/Subject';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
currentIndex;
user;

 users=  [] ;
     errorMessage: string;
  constructor(private _userService: UserService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this.getContacts();
   
  }
  
  
    getContacts() {
    this._userService.getUsers().subscribe(
      users => {
      this.users = users;
       
       }, 
        error => this.errorMessage = <any> error
    );
    
  }
   deleteUser(user) {
    this._userService.deleteUser(user).subscribe(
            data => {

             this.getContacts();  

            },
            error => this.errorMessage = <any> error
        );
  }



}
