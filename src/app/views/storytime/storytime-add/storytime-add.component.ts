import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ContributorInterface } from "../../../../model/ContributorInterface";
import { EditorialInterface } from "../../../../model/EditorialInterface";
import { FeaturedInfoInterface } from "../../../../model/FeaturedInfoInterface";
import { SeriesInfoInterface } from "../../../../model/SeriesInfoInterface";

@Component({
  selector: "app-storytime-add",
  templateUrl: "./storytime-add.component.html",
  styleUrls: ["./storytime-add.component.css"]
})
export class StorytimeAddComponent implements OnInit {
  selectedBanner: string | null;
  statusBannerModal: boolean = false;

  featuredInfo: FeaturedInfoInterface = {
    featured: false,
    image: "",
    slogan: "",
    subHeading: "",
    link: ""
  };

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
    article: ""
  };

  feturedSeriesInfo: SeriesInfoInterface = {
    title: "",
    sequence: "",
    image: "",
    seriesId: "",
    description: "",
    country: "",
    language: "",
    sku: "",
    synopsis: "",
    product: "",
    opening: "",
    videoLink: "",
    closing: "",
    episodes: [
      { sequence: "", title: "", episodeId: "", titleId: "", image: "", isbn: "", description: "", sypnosis: "", product: "" },
      { sequence: "", title: "", episodeId: "", titleId: "", image: "", isbn: "", description: "", sypnosis: "", product: "" },
      { sequence: "", title: "", episodeId: "", titleId: "", image: "", isbn: "", description: "", sypnosis: "", product: "" }
    ],
    partners: [
      { function: "", id: "", firstName: "", lastName: "", companyName: "", bio: "" },
      { function: "", id: "", firstName: "", lastName: "", companyName: "", bio: "" }
    ]
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
