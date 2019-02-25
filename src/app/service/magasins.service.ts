import {Injectable} from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Events} from './../models/events';
import {User} from './../models/user';
import {Magasins} from './../models/magasins';

import {AuthService} from './../auth.service';

@Injectable({
    providedIn: 'root'
})
export class MagasinsService {

    private uri = 'http://127.0.0.1:8000/api/';

    token: string;

    

    constructor(private http: Http, private authenticationService: AuthService) {
        this.token = JSON.parse(localStorage.getItem('Token'));

    }
    
   
  

    addNewEvent(events: Events) {
        console.log(this.token);
        console.log(events);
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.uri + 'events/addnewevents', JSON.stringify(events), {headers: headers}).map(res => res.json()).catch(this.handelError);

    }
    
    
    getEventsList(): Observable<any[]> {
        console.log(this.token);
        const headers = new Headers({'Authorization': 'Bearer ' + this.token});
        return this.http.get(this.uri + 'events', {headers: headers}).map(res => <Events[]> res.json()).catch(this.handelError);
        
       

    }
    
    getEventsInteressedList(id): Observable<any[]> {
        console.log(this.token);
        const headers = new Headers({'Authorization': 'Bearer ' + this.token});
        return this.http.get(this.uri + 'events/interssed/' +id, {headers: headers}).map(res => <Events[]> res.json()).catch(this.handelError);
        
       

    }
    
    
    
    
     deleteEvents(id) {
         
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.delete(this.uri + 'events/deleteevents'+ '/' + id, {headers: headers}).map(res => res.json()).catch(this.handelError);

    }
    deleteMagasin(id) {
         
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.delete(this.uri + 'magasins/deletemagasin'+ '/' + id, {headers: headers}).map(res => res.json()).catch(this.handelError);

    }
    
     addMagasins(magasin: Magasins) {

        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.uri + 'magasin/addmagasin', JSON.stringify(magasin), {headers: headers}).map(res => res.json()).catch(this.handelError);

    }
    
    eventinterssant(event: Events) {
     
        console.log(this.token);
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.uri + 'events/interessant/'+  event.id, JSON.stringify(event),{headers: headers}).map(res => <Events[]>res.json()).catch(this.handelError);

    }
    
   
    
    private handelError(error: Response) {

        return Observable.throw(error.json().errors || 'server error');

    }
    
    updateEvent(event: Events,id) {
         
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
         return this.http.put(this.uri + 'events/update/'+id, JSON.stringify(event),{headers: headers}).map(res => <Events[]> res.json()).catch(this.handelError);

    }
    
    

}
