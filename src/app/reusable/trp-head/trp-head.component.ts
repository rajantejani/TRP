import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-trp-head",
  templateUrl: "./trp-head.component.html",
  styleUrls: ["./trp-head.component.css"]
})
export class TrpHeadComponent implements OnInit {
  @Input() headTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
