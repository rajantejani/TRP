import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogRoutingModule } from "./blog-routing.module";
import { BlogAddComponent } from "./blog-add/blog-add.component";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogFormComponent } from "./blog-form/blog-form.component";
import { ReusableModule } from "../../reusable/reusable.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [BlogAddComponent, BlogListComponent, BlogFormComponent],
  imports: [CommonModule, BlogRoutingModule, ReusableModule, FormsModule]
})
export class BlogModule {}
