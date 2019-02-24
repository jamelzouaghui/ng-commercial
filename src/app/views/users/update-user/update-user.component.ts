import {Component, OnInit, ViewChild} from '@angular/core';

import {UserService} from './../../../service/user.service';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {User} from './../../../models/user';


@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

    selectedFile = null;
    id: number;
    user: any = {};
    @ViewChild('f') form: any;
    errors = [];
    errorMessage: string;


    users = [];

    constructor(private _userService: UserService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            console.log('yes');
            console.log(params);
            this.id = +params['id'];
        });


        this._userService.getUsers().subscribe(
            users => {
                this.users = users;
                for (var i = 0; i < this.users.length; i++) {
                    if (parseInt(this.users[i].id) === this.id) {
                        this.user = this.users[i];
                        break;

                    }

                }

            },
            error => this.errorMessage = <any> error
        );


    }

    updateUser(user) {
        console.log(user);
        this._userService.updateUser(user,this.id).subscribe(
            data => {
this.router.navigate(['/users/users']);
            },
            error => this.errorMessage = <any> error
        );
    }

}
