import { Component, OnInit } from '@angular/core';
import {Team} from './team';
import {TeamsService} from '../services/teams.service';
import {Observable} from 'rxjs';
import {Champions} from '../championship/teamChampionship';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams$: Observable<Team[]> = new Observable<Team[]>();

  teams: Team[] = [];
  displayedColumns: string[] = ['acronym', 'fullName'];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teams$ = this.teamsService.getTeams();
  }

}
