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

    events: Array<Events> = [];
    errorMessage: string;
    constructor(private _magasinstService: MagasinsService, private router: Router) {}

    ngOnInit() {
        this.getEvents();
    }


    getEvents() {
        this._magasinstService.getEvents().subscribe(
            data => {

                this.data = data.result;;

            },
            error => this.errorMessage = <any> error
        );

    }
   
    
    deleteEvent(event) {
    this._magasinstService.deleteEvents(event).subscribe(
            data => {

               

            },
            error => this.errorMessage = <any> error
        );
  }

}
