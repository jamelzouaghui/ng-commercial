import { Component, OnInit } from '@angular/core';
import {UserService} from './../../../service/user.service';
import {Magasins} from './../../../models/magasins';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-list-magasins',
  templateUrl: './list-magasins.component.html',
  styleUrls: ['./list-magasins.component.scss']
})
export class ListMagasinsComponent implements OnInit {
currentIndex;
magasin;
magasins: Array<Magasins>= [] ;
     errorMessage: string;
  constructor(private _userService: UserService,private router: Router) { }

  ngOnInit() {
      this.getMagasins();
  }
  
  
    getMagasins() {
    this._userService.getMagasins().subscribe(
      magasins => {
      this.magasins = magasins;
          console.log(this.magasins);
       //this.dtTrigger.next();
       }, 
        error => this.errorMessage = <any> error
    );
    
  }


}
