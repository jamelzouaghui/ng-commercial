import {Component, OnInit} from '@angular/core';
import {MagasinsService} from './../../../service/magasins.service';


import {Events} from './../../../models/events';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';

@Component({
    selector: 'app-events-interred',
    templateUrl: './events-interred.component.html',
    styleUrls: ['./events-interred.component.scss']
})
export class EventsInterredComponent implements OnInit {


    currentIndex;
    event;
    public data: any[];
    id: number;
    events: any;
    errorMessage: string;
    constructor(private _magasinstService: MagasinsService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        this.getEventsInteressed();


        this.route.params.subscribe(params => {
            console.log('yes');
            console.log(params);
            this.id = +params['id'];
        });

    }


    getEventsInteressed() {


        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        console.log(this.id);
        this._magasinstService.getEventsInteressedList(this.id).subscribe(
            data => {
                console.log(data);
                this.events = data;

            },
            error => this.errorMessage = <any> error
        );

    }



}
