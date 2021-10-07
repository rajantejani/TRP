import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-trp-side-modal",
  templateUrl: "./trp-side-modal.component.html",
  styleUrls: ["./trp-side-modal.component.scss"]
})
export class TrpSideModalComponent implements OnInit {
  @Input() open: boolean;
  constructor() {}

  ngOnInit(): void {}
}
