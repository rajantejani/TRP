import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [BookAddComponent, BookListComponent, BookFormComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
