import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SteppingStoneRoutingModule } from "./stepping-stones-routing";
import { SteppingStonesListAddComponent } from "./stepping-stones-add/stepping-stones-add.component";
import { SteppingStonesListListComponent } from "./stepping-stones-list/stepping-stones-list.component";
import { SteppingStonesListFormComponent } from "./stepping-stones-form/stepping-stones-form.component";

@NgModule({
  declarations: [SteppingStonesListAddComponent, SteppingStonesListListComponent, SteppingStonesListFormComponent],
  imports: [CommonModule, SteppingStoneRoutingModule]
})
export class SteppingStonesListModule {}
