import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Team} from '../../team';
import {TeamsService} from '../../../services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  team = {} as Team;

  teamForm = new FormGroup({
    acronym: new FormControl(''),
    fullName: new FormControl(''),
    creationDate: new FormControl(''),
  });

  constructor(private teamService: TeamsService) {
  }

  ngOnInit(): void {
  }

  submit(form: FormGroup): void {

    console.log(form.value);
    this.team = new Team(form.value);
    this.teamForm.reset();
    this.teamService.addTeam(this.team).subscribe();
  }
}
