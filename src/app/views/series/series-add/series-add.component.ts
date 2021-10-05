import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ContributorInterface } from "../../../../model/ContributorInterface";
import { EditorialInterface } from "../../../../model/EditorialInterface";
import { FeaturedInfoInterface } from "../../../../model/FeaturedInfoInterface";
import { SeriesInfoInterface } from "../../../../model/SeriesInfoInterface";

@Component({
  selector: "app-series-add",
  templateUrl: "./series-add.component.html",
  styleUrls: ["./series-add.component.css"]
})
export class SeriesAddComponent implements OnInit {
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
    Sequence: "",
    image: "",
    seriesId: "",
    description: "",
    country: "",
    language: "",
    SKU: "",
    synopsis: "",
    product: "",
    episodes: [],
    partners: [{ function: "", id: "", firstName: "", lastName: "", companyName: "", bio: "" }]
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
