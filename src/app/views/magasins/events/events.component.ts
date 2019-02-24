import {Component, OnInit} from '@angular/core';
import {MagasinsService} from './../../../service/magasins.service';


import {Events} from './../../../models/events';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';


@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

    currentIndex;
    event;
    public data: any[];

    events: any;
    errorMessage: string;
    constructor(private _magasinstService: MagasinsService, private router: Router) {}

    ngOnInit() {
        this.getEvents();
    }


    getEvents() {
        this._magasinstService.getEventsList().subscribe(
            data => {

                this.events = data;

            },
            error => this.errorMessage = <any> error
        );

    }


    deleteEvent(id) {
        this._magasinstService.deleteEvents(id).subscribe(
            data => {
                this.getEvents();


            },
            error => this.errorMessage = <any> error
        );
    }
    intersedEvent(id) {
        this._magasinstService.interssedEvents(id).subscribe(
            data => {
                this.getEvents();


            },
            error => this.errorMessage = <any> error
        );
    }


}
