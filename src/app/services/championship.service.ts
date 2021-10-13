import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';
import {Championships} from '../championship/championships';
import {Champions, TeamChampionship} from '../championship/teamChampionship';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {
  championshipsUrl = 'http://localhost:8080/bet-bro/public/v1/championships';
  teamsChampionship = 'http://localhost:8080/bet-bro/public/v1/championships/teams';

  constructor(private http: HttpClient) {
  }

  getChampionships(): Observable<Championships> {
    return this.http.get<Championships>(this.championshipsUrl);
  }

  getTeamsChampionship(): Observable<Champions> {
    return this.http.get<TeamChampionship>(this.teamsChampionship)
      .pipe(pluck('championships'));
  }

}
