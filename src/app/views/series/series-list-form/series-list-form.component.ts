import { Component, Input, OnInit } from "@angular/core";
import { SeriesInfoInterface } from "../../../../model/SeriesInfoInterface";

@Component({
  selector: "app-series-list-form",
  templateUrl: "./series-list-form.component.html",
  styleUrls: ["./series-list-form.component.css"]
})
export class SeriesListFormComponent implements OnInit {
  @Input() feturedSeriesInfo: SeriesInfoInterface;
  open: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
