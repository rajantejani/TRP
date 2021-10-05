import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { FAQAddComponent } from './faq-add/faq-add.component';
import { FAQListComponent } from './faq-list/faq-list.component';
import { ReportPrivacyComponent } from './report-privacy/report-privacy.component';
import { ManuscriptSubmissionComponent } from './manuscript-submission/manuscript-submission.component';
import { OnlinePiracyReportFormComponent } from './online-piracy-report-form/online-piracy-report-form.component';


@NgModule({
  declarations: [FAQAddComponent, FAQListComponent, ReportPrivacyComponent, ManuscriptSubmissionComponent, OnlinePiracyReportFormComponent],
  imports: [
    CommonModule,
    HelpRoutingModule
  ]
})
export class HelpModule { }
