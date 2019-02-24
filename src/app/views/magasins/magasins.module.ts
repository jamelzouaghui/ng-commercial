import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MagasinsRoutingModule } from './magasins-routing.module';
import { EventsComponent } from './events/events.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { UpdateEventsComponent } from './update-events/update-events.component';
import { DeleteEventsComponent } from './delete-events/delete-events.component';
import { AddMagasinsComponent } from './add-magasins/add-magasins.component';
import { UpdateMagasinsComponent } from './update-magasins/update-magasins.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MagasinsRoutingModule
  ],
  declarations: [EventsComponent, AddEventsComponent, UpdateEventsComponent, DeleteEventsComponent, AddMagasinsComponent, UpdateMagasinsComponent]
})
export class MagasinsModule { }
