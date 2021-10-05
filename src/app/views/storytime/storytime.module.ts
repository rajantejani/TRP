import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorytimeRoutingModule } from './storytime-routing.module';
import { StorytimeAddComponent } from './storytime-add/storytime-add.component';
import { StorytimeListComponent } from './storytime-list/storytime-list.component';
import { StorytimeFormComponent } from './storytime-form/storytime-form.component';


@NgModule({
  declarations: [StorytimeAddComponent, StorytimeListComponent, StorytimeFormComponent],
  imports: [
    CommonModule,
    StorytimeRoutingModule
  ]
})
export class StorytimeModule { }
