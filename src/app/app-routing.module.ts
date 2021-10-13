import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TeamsComponent} from './teams/teams.component';
import {ChampionshipComponent} from './championship/championship.component';

const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'championships', component: ChampionshipComponent},
  {path: '', redirectTo: '/teams', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
