import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { ModalDirective } from "ngx-bootstrap/modal";
import { editorConfig } from "../../../data/editorConfig";

@Component({
  selector: "app-trp-editor-input",
  templateUrl: "./trp-editor-input.component.html",
  styleUrls: ["./trp-editor-input.component.css"]
})
export class TrpEditorInputComponent implements OnInit {
  @Input() editorValue: string;
  @Input() placeholder: string;
  config: AngularEditorConfig = editorConfig;
  @ViewChild("myModal") public myModal: ModalDirective;

  constructor() {}

  ngOnInit(): void {}

  openEditor() {
    this.myModal.show();
  }
}
