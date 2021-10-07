import { Component, Input, OnInit } from "@angular/core";
import { SeriesInfoInterface } from "../../../../model/SeriesInfoInterface";

@Component({
  selector: "app-storytime-form",
  templateUrl: "./storytime-form.component.html",
  styleUrls: ["./storytime-form.component.css"]
})
export class StorytimeFormComponent implements OnInit {
  @Input() feturedSeriesInfo: SeriesInfoInterface;
  open: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
