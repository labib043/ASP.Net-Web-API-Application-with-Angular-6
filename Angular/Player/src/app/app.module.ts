import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TeamComponentComponent } from './team-component/team-component.component';
import { PlayerComponentComponent } from './player-component/player-component.component';
import { Routes ,  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { player } from './service/playerSevices';
import { FormsModule } from '@angular/forms';
import { teamSvc } from './service/teamServices';
import { YelloeFellowDirective } from './yelloe-fellow.directive';


const appRoutes: Routes = [
  { path: 'teaminfo', component: TeamComponentComponent },
  { path: 'playerinfo', component: PlayerComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TeamComponentComponent,
    PlayerComponentComponent,
    YelloeFellowDirective
  ],
  imports: [
    BrowserModule, HttpClientModule , FormsModule , RouterModule.forRoot(appRoutes)
  ],
  providers: [player,teamSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
