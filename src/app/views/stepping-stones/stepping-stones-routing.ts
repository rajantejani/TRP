import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SteppingStonesListAddComponent } from "./stepping-stones-add/stepping-stones-add.component";
import { SteppingStonesListListComponent } from "./stepping-stones-list/stepping-stones-list.component";

const routes: Routes = [
  {
    path: "",
    component: SteppingStonesListListComponent,
    data: { title: "Stepping Stone List" }
  },
  {
    path: "add",
    component: SteppingStonesListAddComponent,
    data: { title: "Stepping Stone List" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SteppingStoneRoutingModule {}
