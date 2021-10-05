import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  featuredSeries: null | number = null;
  constructor() { }

  ngOnInit(): void {
  }
  selectFeatureSeries(id: number) {
    if (this.featuredSeries === id) this.featuredSeries = null;
    this.featuredSeries = id;
  }
}
