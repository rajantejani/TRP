import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SteppingStoneRoutingModule } from "./stepping-stones-routing";
import { SteppingStonesListAddComponent } from "./stepping-stones-add/stepping-stones-add.component";
import { SteppingStonesListListComponent } from "./stepping-stones-list/stepping-stones-list.component";
import { SteppingStonesListFormComponent } from "./stepping-stones-form/stepping-stones-form.component";
import { ReusableModule } from "../../reusable/reusable.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SteppingStonesListAddComponent, SteppingStonesListListComponent, SteppingStonesListFormComponent],
  imports: [CommonModule, SteppingStoneRoutingModule, FormsModule, ReusableModule]
})
export class SteppingStonesListModule {}
