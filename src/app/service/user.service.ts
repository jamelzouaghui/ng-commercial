import {Injectable} from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {User} from './../models/user';

import {Magasins} from './../models/magasins';
import {AuthService} from './../auth.service';






@Injectable({
    providedIn: 'root'
})
export class UserService {

    private uri = 'http://127.0.0.1:8000/api/';

    token: string;

    constructor(private http: Http, private authenticationService: AuthService) {
        this.token = JSON.parse(localStorage.getItem('Token'));

    }

  

    getUser(username) {

        const headers = new Headers();
        headers.append('content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authenticationService.token);

        return this.http.get(this.uri + 'user/' + username, {headers: headers}).map(

            res => <User[]> res.json()

        ).catch(this.handelError);


    }
    addNewUser(user: User) {

        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.uri + 'users/addnew', JSON.stringify(user), {headers: headers}).map(res => res.json()).catch(this.handelError);

    }


    getUsers(): Observable<any[]> {
        console.log(this.authenticationService.token);
        console.log(this.token);
        //const headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
        const headers = new Headers({'Authorization': 'Bearer ' + this.token});
        return this.http.get(this.uri + 'users', {headers: headers}).map(res => <User[]> res.json()).catch(this.handelError);

    }

    getMagasins(): Observable<any[]> {
        const headers = new Headers({'Authorization': 'Bearer ' + this.token});
        return this.http.get(this.uri + 'magasins', {headers: headers}).map(res => <Magasins[]> res.json()).catch(this.handelError);

    }




   

    private handelError(error: Response) {

        return Observable.throw(error.json().errors || 'server error');

    }



}
