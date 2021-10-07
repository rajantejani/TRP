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
import { TrpSideModalComponent } from "./trp-side-modal/trp-side-modal.component";
import { TrpFromListItemComponent } from "./trp-from-list-item/trp-from-list-item.component";
import { TrpEditorInputComponent } from "./trp-editor-input/trp-editor-input.component";
import { SafeHtmlModule } from "./trp-editor-input/sanitize-html.module";
import { TrpContributerCardComponent } from './trp-contributer-card/trp-contributer-card.component';

@NgModule({
  declarations: [
    BannerSelectionComponent,
    TrpHeadComponent,
    DraggableModalComponent,
    TrpFeaturedComponent,
    TrpContributorComponent,
    TrpEditorialComponent,
    TrpFromListItemComponent,
    TrpSideModalComponent,
    TrpEditorInputComponent,
    TrpContributerCardComponent
  ],
  imports: [CommonModule, ReusableRoutingModule, FormsModule, ModalModule.forRoot(), AngularEditorModule, HttpClientModule, SafeHtmlModule],
  exports: [
    BannerSelectionComponent,
    TrpHeadComponent,
    DraggableModalComponent,
    TrpFeaturedComponent,
    TrpContributorComponent,
    TrpEditorialComponent,
    TrpFromListItemComponent,
    TrpEditorInputComponent,
    TrpSideModalComponent
  ]
})
export class ReusableModule {}
