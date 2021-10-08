import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Team} from '../../team';
import {TeamsService} from '../../../services/teams.service';
import {ChampionshipService} from '../../../services/championship.service';
import {Championship} from '../../../championship/championship';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  team = {} as Team;
  championships: Championship[] = [];

  teamForm = new FormGroup({
    acronym: new FormControl(''),
    fullName: new FormControl(''),
    creationDate: new FormControl(''),
    championshipId: new FormControl('')
  });

  constructor(private teamService: TeamsService, private championshipService: ChampionshipService, public fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getChampionships();
  }

  getChampionships(): void {
    this.championshipService.getChampionships()
      .subscribe(championships => this.championships = championships.championships);
  }

  submit(form: FormGroup): void {

    console.log(form.value);
    this.team = new Team(form.value);
    this.teamService.addTeam(this.team).subscribe();
    this.teamForm.reset();
  }
}
