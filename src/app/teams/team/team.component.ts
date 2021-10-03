import { Component, OnInit } from '@angular/core';
import {Team} from '../team';
import {TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teams: Team[] = [];
  displayedColumns: string[] = ['acronym', 'fullName'];


  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamsService.getTeams()
      .subscribe(teams => (this.teams = teams));
  }

}
