import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SeriesAddComponent } from "./series-add/series-add.component";
import { SeriesListComponent } from "./series-list/series-list.component";

const routes: Routes = [
  {
    path: "",
    component: SeriesListComponent,
    data: { title: "Series List" }
  },
  {
    path: "add",
    component: SeriesAddComponent,
    data: { title: "Series List" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule {}
