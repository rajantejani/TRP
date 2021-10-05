import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorytimeAddComponent } from './storytime-add/storytime-add.component';
import { StorytimeListComponent } from './storytime-list/storytime-list.component';

const routes: Routes = [
  {
    path: "",
    component: StorytimeListComponent,
    data: { title: "Story Time List" }
  },
  {
    path: "add",
    component: StorytimeAddComponent,
    data: { title: "Story Time List" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorytimeRoutingModule { }
