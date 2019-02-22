import {Component, OnInit, ViewChild} from '@angular/core';

import {MagasinsService} from './../../../service/magasins.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {Events} from './../../../models/events';


@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss']
})
export class AddEventsComponent implements OnInit {

   
      selectedFile = null;
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    events: any = {};
    @ViewChild('f') form: any;
    errors = [];

    constructor(private _magasinsService: MagasinsService, private router: Router) {

    }

    ngOnInit() {
    }

    registerEvents(form: NgForm) {
        let events: any;
        this._magasinsService.addNewEvent(this.events).subscribe((result => {


            this.router.navigate(['/magasins/events']);

        }), addError => this.errors = addError);

    }


}
