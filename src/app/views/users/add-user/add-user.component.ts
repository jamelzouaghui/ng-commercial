import {Component, OnInit, ViewChild} from '@angular/core';

import {UserService} from './../../../service/user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {User} from './../../../models/user';



@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

    selectedFile = null;
    
    user: any = {};
    @ViewChild('f') form: any;
    errors = [];


    constructor(private _userService: UserService, private router: Router) {

    }

    ngOnInit() {
    }

    registerUser(form: NgForm) {
        let user: any;
        this._userService.addNewUser(this.user).subscribe((result => {


            this.router.navigate(['/users/users']);

        }), addError => this.errors = addError);

    }


}
