import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TeamsComponent} from './teams/teams.component';
import {MaterialModule} from './material/material.module';
import {AddTeamComponent} from './teams/add/add-team/add-team.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppBarComponent} from './app-bar/app-bar.component';
import {FooterComponent} from './footer/footer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ChampionshipComponent} from './championship/championship.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    AddTeamComponent,
    AppBarComponent,
    FooterComponent,
    PageNotFoundComponent,
    ChampionshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
