import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-series-list",
  templateUrl: "./series-list.component.html",
  styleUrls: ["./series-list.component.scss"]
})
export class SeriesListComponent implements OnInit {
  featuredSeries: null | number = null;
  constructor() {}

  ngOnInit(): void {}

  selectFeatureSeries(id: number) {
    if (this.featuredSeries === id) this.featuredSeries = null;
    this.featuredSeries = id;
  }
}
