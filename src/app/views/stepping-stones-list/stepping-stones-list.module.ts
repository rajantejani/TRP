import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteppingStoneRoutingModule } from "./stepping-stones-list-routing";
import { SteppingStonesListAddComponent } from './stepping-stones-list-add/stepping-stones-list-add.component';
import { SteppingStonesListListComponent } from './stepping-stones-list-list/stepping-stones-list-list.component';
import { SteppingStonesListFormComponent } from './stepping-stones-list-form/stepping-stones-list-form.component';

@NgModule({
  declarations: [SteppingStonesListAddComponent, SteppingStonesListListComponent, SteppingStonesListFormComponent],
  imports: [
    CommonModule,SteppingStoneRoutingModule
  ]
})
export class SteppingStonesListModule { }
