import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { EditorialInterface } from "../../../../model/EditorialInterface";

@Component({
  selector: "app-about-info",
  templateUrl: "./about-info.component.html",
  styleUrls: ["./about-info.component.css"]
})
export class AboutInfoComponent implements OnInit {
  selectedBanner: string | null;
  statusBannerModal: boolean = false;
  timeline = [
    { year: "", event: "" },
    { year: "", event: "" },
    { year: "", event: "" }
  ];
  editorialInfo: EditorialInterface = {
    heading: "",
    article: ""
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

  addYear() {
    this.timeline = [...this.timeline, { year: "", event: "" }];
  }
  removeYear(index: number) {
    this.timeline = this.timeline.filter((_, i) => i !== index);
  }
}
