import { Component, Input, OnInit } from "@angular/core";
import { SeriesInfoInterface } from "../../../../model/SeriesInfoInterface";

@Component({
  selector: "app-book-form",
  templateUrl: "./book-form.component.html",
  styleUrls: ["./book-form.component.css"]
})
export class BookFormComponent implements OnInit {
  @Input() feturedSeriesInfo: SeriesInfoInterface;
  open: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
