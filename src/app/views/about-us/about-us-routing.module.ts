import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutInfoComponent } from './about-info/about-info.component';
import { EditorialTeamComponent } from './editorial-team/editorial-team.component';
import { ArtDirectorTeamComponent } from './art-director-team/art-director-team.component';
import { AnimationTeamComponent } from './animation-team/animation-team.component';
import { DevelopmentTeamComponent } from './development-team/development-team.component';
import { AdministrationTeamComponent } from './administration-team/administration-team.component';
import { LeadershipTeamComponent } from './leadership-team/leadership-team.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: "about-info",
    component: AboutInfoComponent,
    data: { title: "About List" }
  },
  {
    path: "editorialteam",
    component: EditorialTeamComponent,
    data: { title: "Editorial Team" }
  },
  {
    path: "artdirectorteam",
    component: ArtDirectorTeamComponent,
    data: { title: "Art Director Team" }
  },
  {
    path: "animationteam",
    component: AnimationTeamComponent,
    data: { title: "Animation Team" }
  },
  {
    path: "developmentteam",
    component: DevelopmentTeamComponent,
    data: { title: "Development Team" }
  },
  {
    path: "administrationteam",
    component: AdministrationTeamComponent,
    data: { title: "Administration Team" }
  },
  {
    path: "leadershipteam",
    component: LeadershipTeamComponent,
    data: { title: "Leadership Team" }
  },
  {
    path: "leadership",
    component: LeadershipComponent,
    data: { title: "Leadership Team" }
  },
  {
    path: "news",
    component: NewsComponent,
    data: { title: "News" }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
