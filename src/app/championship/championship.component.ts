import {Component, OnInit} from '@angular/core';
import {ChampionshipService} from '../services/championship.service';
import {Team} from '../teams/team';
import {Champions, TeamChampionship} from './teamChampionship';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss']
})
export class ChampionshipComponent implements OnInit {
  ligue1: Team[] = [];
  liga: Team[] = [];
  pl: Team[] = [];
  obs$: Observable<Champions> = new Observable<Champions>();
  displayedColumns: string[] = ['acronym', 'fullName'];

  constructor(private championshipService: ChampionshipService) {
  }

  ngOnInit(): void {
    this.getTeamsChampionship();
  }

  getTeamsChampionship(): void {
    this.championshipService.getTeamsChampionship().subscribe(res => {
      this.liga = Object.values(res)[0];
      this.pl = Object.values(res)[1];
      this.ligue1 = Object.values(res)[2];
    });


  }
}
