import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ContributorInterface } from "../../../../model/ContributorInterface";
import { EditorialInterface } from "../../../../model/EditorialInterface";
import { FeaturedInfoInterface } from "../../../../model/FeaturedInfoInterface";
import { SeriesInfoInterface } from "../../../../model/SeriesInfoInterface";

@Component({
  selector: "app-blog-add",
  templateUrl: "./blog-add.component.html",
  styleUrls: ["./blog-add.component.css"]
})
export class BlogAddComponent implements OnInit {
  selectedBanner: string | null;
  statusBannerModal: boolean = false;

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

  editorialInfo: EditorialInterface = {
    heading: "",
    article: "",
    image: "",
    date: "",
    opening: "",
    blog: ""
  };

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  changeStatusBannerModal = (status: boolean) => {
    this.statusBannerModal = status;
    this.cd.detectChanges();
  };

  updatedSelectedBanner = (banner: string) => {
    this.selectedBanner = banner;
    this.statusBannerModal = false;
    this.cd.detectChanges();
  };
}
