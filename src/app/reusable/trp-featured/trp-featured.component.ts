import { Component, Input, OnInit } from "@angular/core";
import { FeaturedInfoInterface } from "../../../model/FeaturedInfoInterface";

@Component({
  selector: "app-trp-featured",
  templateUrl: "./trp-featured.component.html",
  styleUrls: ["./trp-featured.component.css"]
})
export class TrpFeaturedComponent implements OnInit {
  @Input() featuredInfo: FeaturedInfoInterface;

  constructor() {}

  ngOnInit(): void {
    console.log(this.featuredInfo);
  }
}
