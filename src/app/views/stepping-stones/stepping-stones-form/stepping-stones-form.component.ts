import { Component, Input, OnInit } from "@angular/core";
import { SeriesInfoInterface } from "../../../../model/SeriesInfoInterface";

@Component({
  selector: "app-stepping-stones-form",
  templateUrl: "./stepping-stones-form.component.html",
  styleUrls: ["./stepping-stones-form.component.css"]
})
export class SteppingStonesListFormComponent implements OnInit {
  @Input() feturedSeriesInfo: SeriesInfoInterface;
  open: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
