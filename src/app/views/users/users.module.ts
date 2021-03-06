import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListMagasinsComponent } from './list-magasins/list-magasins.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  declarations: [UsersComponent, AddUserComponent, ListMagasinsComponent, UpdateUserComponent],
   exports: [  ]
})
export class UsersModule { }
