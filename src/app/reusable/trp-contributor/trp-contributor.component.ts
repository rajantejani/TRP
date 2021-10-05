import { Component, Input, OnInit } from "@angular/core";
import { ContributorInterface } from "../../../model/ContributorInterface";

@Component({
  selector: "app-trp-contributor",
  templateUrl: "./trp-contributor.component.html",
  styleUrls: ["./trp-contributor.component.css"]
})
export class TrpContributorComponent implements OnInit {
  @Input() contributerInfo: ContributorInterface;

  constructor() {}

  ngOnInit(): void {}
}
