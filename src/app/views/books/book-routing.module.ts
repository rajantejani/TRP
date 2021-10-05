import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {
    path: "",
    component: BookListComponent,
    data: { title: "Book List" }
  },
  {
    path: "add",
    component: BookAddComponent,
    data: { title: "Book List" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
