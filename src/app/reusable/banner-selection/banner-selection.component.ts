import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { assetCategoriesList } from "../../../data/assest-categories";
import { CategoryListInterface } from "../../../model/categoryListInterface";

@Component({
  selector: "app-banner-selection",
  templateUrl: "./banner-selection.component.html",
  styleUrls: ["./banner-selection.component.scss"]
})
export class BannerSelectionComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() selectedBanner: string | null;
  @Input() statusBannerModal: boolean;
  @Input() updatedSelectedBanner: (link: string) => void;
  @Input() changeStatusBannerModal: (status: boolean) => void;
  @ViewChild("bannerModal") public bannerModal: ModalDirective;

  privateStatusModal: boolean = false;
  properties: CategoryListInterface[] = assetCategoriesList;
  levelArr: CategoryListInterface[][] = [];
  levelAns: number | string[] = [""];
  unlockView = false;
  resolution = "";
  imageType = "";
  view = false;
  viewArray = ["Th", "EV", "HV", "FI", "FQ", "MC", "PC", "JP"];

  constructor() {}

  ngOnInit(): void {
    this.levelArr = [this.properties];
    console.log(this.levelArr);
  }

  ngAfterViewInit() {
    this.bannerModal.onHide.subscribe(() => {
      this.changeStatusBannerModal(false);
    });
    this.bannerModal.onShow.subscribe(() => {
      this.changeStatusBannerModal(true);
    });
  }

  ngOnChanges(change: SimpleChanges): void {
    if (this.bannerModal && change.statusBannerModal) {
      console.log(this.bannerModal.isShown);
      if (change.statusBannerModal?.currentValue) {
        if (!this.bannerModal.isShown) {
          this.bannerModal.show();
          this.levelArr = [this.properties];
          this.levelAns = [""];
          this.unlockView = false;
          this.resolution = "";
          this.imageType = "";
          this.view = false;
        }
      } else this.bannerModal.hide();
    }
  }

  levelSelection(e: any, index: number) {
    this.levelArr = this.levelArr.filter((l, i) => i <= index);
    const lastSelected = this.levelArr[this.levelArr.length - 1];
    if (lastSelected[+e.target.value]?.subCats?.length) {
      this.levelArr = [...this.levelArr, lastSelected[index].subCats];
      this.unlockView = false;
    } else {
      this.unlockView = true;
    }
  }

  selectBanner() {
    this.updatedSelectedBanner(
      "https://firebasestorage.googleapis.com/v0/b/trp-mrk-frb-prod.appspot.com/o/giggles12.png?alt=media&token=66f43a7e-8eb9-4241-8137-4c4c274fcec4"
    );
  }
}
