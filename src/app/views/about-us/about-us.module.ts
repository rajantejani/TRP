import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutInfoComponent } from './about-info/about-info.component';
import { EditorialTeamComponent } from './editorial-team/editorial-team.component';
import { ArtDirectorTeamComponent } from './art-director-team/art-director-team.component';
import { AnimationTeamComponent } from './animation-team/animation-team.component';
import { DevelopmentTeamComponent } from './development-team/development-team.component';
import { AdministrationTeamComponent } from './administration-team/administration-team.component';
import { LeadershipTeamComponent } from './leadership-team/leadership-team.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [AboutInfoComponent, EditorialTeamComponent, ArtDirectorTeamComponent, AnimationTeamComponent, DevelopmentTeamComponent, AdministrationTeamComponent, LeadershipTeamComponent, LeadershipComponent, NewsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
