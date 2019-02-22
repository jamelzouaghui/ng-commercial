import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './../../_guards/auth.guard';
import {UsersComponent} from './../users/users.component';
import {AddUserComponent} from './../users/add-user/add-user.component';

import {ListMagasinsComponent} from './../users/list-magasins/list-magasins.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'Users'
        }
      },
      {
        path: 'userAdd',
        component: AddUserComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'userAdd'
        }
      },
      {
        path: 'magasins',
        component: ListMagasinsComponent,
        canActivate:[AuthGuard],
        data: {
          title: 'magasins'
        }
      }
      
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
