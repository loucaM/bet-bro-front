import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../teams/team';

@Component({
  selector: 'app-team-infos',
  templateUrl: './team-infos.component.html',
  styleUrls: ['./team-infos.component.scss']
})
export class TeamInfosComponent implements OnInit {

  @Input()
  selectedTeam = {} as Team ;

  constructor() {
  }

  ngOnInit(): void {
  }

}
