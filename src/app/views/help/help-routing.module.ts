import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FAQAddComponent } from './faq-add/faq-add.component';
import { FAQListComponent } from './faq-list/faq-list.component';
import { ReportPrivacyComponent } from './report-privacy/report-privacy.component';
import { ManuscriptSubmissionComponent } from './manuscript-submission/manuscript-submission.component';
import { OnlinePiracyReportFormComponent } from './online-piracy-report-form/online-piracy-report-form.component';


  const routes: Routes = [
    {
      path: "faqadd",
      component: FAQAddComponent,
      data: { title: "FAQ Add" }
    },
    {
      path: "faqlist",
      component: FAQListComponent,
      data: { title: "FAQ List" }
    },
    {
      path: "reportpiracy",
      component: ReportPrivacyComponent,
      data: { title: "Report Piracy" }
    },
    {
      path: "manuscript-submission",
      component: ManuscriptSubmissionComponent,
      data: { title: "Manuscript Submission" }
    },
    {
      path: "online-piracy-report-form",
      component: OnlinePiracyReportFormComponent,
      data: { title: "Online Piracy Report Form" }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
