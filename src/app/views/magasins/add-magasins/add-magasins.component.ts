import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from './../../../service/user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {User} from './../../../models/user';
import {MagasinsService} from './../../../service/magasins.service';

@Component({
  selector: 'app-add-magasins',
  templateUrl: './add-magasins.component.html',
  styleUrls: ['./add-magasins.component.scss']
})
export class AddMagasinsComponent implements OnInit {

 selectedFile = null;
    
    magasin: any = {};
    @ViewChild('f') form: any;
    errors = [];


    constructor(private _magasinstService: MagasinsService, private router: Router) {

    }

    ngOnInit() {
    }

    registerMagasins(form: NgForm) {
        let user: any;
        this._magasinstService.addMagasins(this.magasin).subscribe((result => {


            this.router.navigate(['/users/magasins']);

        }), addError => this.errors = addError);

    }



}
