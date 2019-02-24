import {Component, OnInit, ViewChild} from '@angular/core';

import {UserService} from './../../../service/user.service';
import {MagasinsService} from './../../../service/magasins.service';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {User} from './../../../models/user';

@Component({
    selector: 'app-update-events',
    templateUrl: './update-events.component.html',
    styleUrls: ['./update-events.component.scss']
})
export class UpdateEventsComponent implements OnInit {

    selectedFile = null;
    id: number;
    event: any = {};
    @ViewChild('f') form: any;
    errors = [];
    errorMessage: string;


    events = [];

    constructor(private _userService: UserService, private _magasinsService: MagasinsService ,private  router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            console.log('yes');
            console.log(params);
            this.id = +params['id'];
        });


        this._magasinsService.getEventsList().subscribe(
            events => {
                this.events = events;
               
                for (var i = 0; i < this.events.length; i++) {
                    if (parseInt(this.events[i].id) === this.id) {
                        console.log(this.id);
                       
                        this.event = this.events[i];
                        break;

                    }

                }

            },
            error => this.errorMessage = <any> error
        );


    }

    UpdateEvents(event) {
        console.log(event);
        this._magasinsService.updateEvent(event, this.id).subscribe(
            data => {
                this.router.navigate(['/magasins/events']);
            },
            error => this.errorMessage = <any> error
        );
    }



}
