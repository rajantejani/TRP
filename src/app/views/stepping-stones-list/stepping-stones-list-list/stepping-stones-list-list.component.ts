import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepping-stones-list-list',
  templateUrl: './stepping-stones-list-list.component.html',
  styleUrls: ['./stepping-stones-list-list.component.css']
})
export class SteppingStonesListListComponent implements OnInit {
  featuredSeries: null | number = null;
  constructor() { }

  ngOnInit(): void {
  }
  
  selectFeatureSeries(id: number) {
    if (this.featuredSeries === id) this.featuredSeries = null;
    this.featuredSeries = id;
  }
}
