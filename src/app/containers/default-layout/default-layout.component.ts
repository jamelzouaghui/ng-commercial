import {Component, Input, OnInit,ViewChild} from '@angular/core';
import {navItems} from './../../_nav';
import {navItemsAdmin} from './../../_navAdmin';
import {navItemsUser} from './../../_navUser';
import {navItemsMag} from './../../_navMag';
import {User} from './../../models/user';
import {UserService} from './../../service/user.service';
import {ModalDirective} from 'ngx-bootstrap/modal/';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {

    public primaryModal;
    public role;
    currentUser: User;
    users: User[] = [];
  
    @ViewChild('staticModal') public staticModal:ModalDirective;
    
    public navItems = navItems;
    public navItemsAdmin = navItemsAdmin;
    public navItemsUser = navItemsUser;
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement = document.body;
    
    constructor() {
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
       this.role = JSON.parse(localStorage.getItem('role'));
        
        
        this.changes = new MutationObserver((mutations) => {
            this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
        });

        this.changes.observe(<Element> this.element, {
            attributes: true
        });
        
 
    }

    ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.role = JSON.parse(localStorage.getItem('role'));
    

  
    }
    



}
