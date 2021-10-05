import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SeriesRoutingModule } from "./series-routing.module";
import { SeriesListComponent } from "./series-list/series-list.component";
import { AppBreadcrumbModule } from "@coreui/angular";
import { FormsModule } from "@angular/forms";
import { SeriesAddComponent } from "./series-add/series-add.component";
import { ReusableModule } from "../../reusable/reusable.module";
import { SeriesListFormComponent } from './series-list-form/series-list-form.component';

@NgModule({
  declarations: [SeriesListComponent, SeriesAddComponent, SeriesListFormComponent],
  imports: [CommonModule, SeriesRoutingModule, FormsModule, ReusableModule, AppBreadcrumbModule.forRoot()]
})
export class SeriesModule {}
