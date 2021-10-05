import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SteppingStonesListAddComponent } from './stepping-stones-list-add/stepping-stones-list-add.component';
import { SteppingStonesListListComponent } from './stepping-stones-list-list/stepping-stones-list-list.component';


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
