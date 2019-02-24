import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './../../_guards/auth.guard';



import {EventsComponent} from './../magasins/events/events.component';
import {DeleteEventsComponent} from './../magasins/delete-events/delete-events.component';
import { UpdateEventsComponent } from './../magasins/update-events/update-events.component';
import { AddEventsComponent } from './../magasins/add-events/add-events.component';
import {AddMagasinsComponent} from './../magasins/add-magasins/add-magasins.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'magasins'
    },
    children: [
      {
        path: 'events',
        component: EventsComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'events'
        }
      },
      {
        path: 'eventsAdd',
        component: AddEventsComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'eventsAdd'
        }
      },
      {
        path: 'eventsUpdate/:id',
        component: UpdateEventsComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'eventsUpdate'
        }
      },
      {
        path: 'eventsDelete',
        component: DeleteEventsComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'eventsDelete'
        }
      },
      {
        path: 'magasinsAdd',
        component: AddMagasinsComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'magasinsAdd'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagasinsRoutingModule { }
