import { Component, Input, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { editorConfig } from "../../../data/editorConfig";
import { EditorialInterface } from "../../../model/EditorialInterface";

@Component({
  selector: "app-trp-editorial",
  templateUrl: "./trp-editorial.component.html",
  styleUrls: ["./trp-editorial.component.css"]
})
export class TrpEditorialComponent implements OnInit {
  @Input() editorialInfo: EditorialInterface;
  config: AngularEditorConfig = editorConfig;

  constructor() {}

  ngOnInit(): void {}
}
