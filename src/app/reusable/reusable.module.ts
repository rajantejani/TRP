import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReusableRoutingModule } from "./reusable-routing.module";
import { BannerSelectionComponent } from "./banner-selection/banner-selection.component";
import { TrpHeadComponent } from "./trp-head/trp-head.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { DraggableModalComponent } from "./draggable-modal/draggable-modal.component";
import { FormsModule } from "@angular/forms";
import { TrpFeaturedComponent } from "./trp-featured/trp-featured.component";
import { TrpContributorComponent } from "./trp-contributor/trp-contributor.component";
import { TrpEditorialComponent } from "./trp-editorial/trp-editorial.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    BannerSelectionComponent,
    TrpHeadComponent,
    DraggableModalComponent,
    TrpFeaturedComponent,
    TrpContributorComponent,
    TrpEditorialComponent
  ],
  imports: [CommonModule, ReusableRoutingModule, FormsModule, ModalModule.forRoot(), AngularEditorModule, HttpClientModule],
  exports: [BannerSelectionComponent, TrpHeadComponent, DraggableModalComponent, TrpFeaturedComponent, TrpContributorComponent, TrpEditorialComponent]
})
export class ReusableModule {}
