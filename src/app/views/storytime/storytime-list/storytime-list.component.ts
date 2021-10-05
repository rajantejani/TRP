import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storytime-list',
  templateUrl: './storytime-list.component.html',
  styleUrls: ['./storytime-list.component.css']
})
export class StorytimeListComponent implements OnInit {
  featuredSeries: null | number = null;
  constructor() { }

  ngOnInit(): void {
  }
  selectFeatureSeries(id: number) {
    if (this.featuredSeries === id) this.featuredSeries = null;
    this.featuredSeries = id;
  }
}
