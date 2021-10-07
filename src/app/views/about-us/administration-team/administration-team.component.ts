import { Component, OnInit } from "@angular/core";
import { ContributorInterface } from "../../../../model/ContributorInterface";

@Component({
  selector: "app-administration-team",
  templateUrl: "./administration-team.component.html",
  styleUrls: ["./administration-team.component.css"]
})
export class AdministrationTeamComponent implements OnInit {
  open: boolean = false;

  contributerInfo: ContributorInterface = {
    function: "",
    id: "",
    firstName: "",
    lastName: "",
    companyName: "",
    bio: "",
    portrait: "",
    contributor: ""
  };

  constructor() {}

  ngOnInit(): void {}
  addTeamMember = () => {
    this.open = true;
  };
}
