import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Team} from '../teams/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teamsUrl = 'http://localhost:8080/bet-bro/public/v1/teams';


  constructor(private http: HttpClient) {
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl);
  }

  addTeam(team: Team): Observable<Team> {
    console.log(team + 'service')
    return this.http.post<Team>(this.teamsUrl, team);
  }
}
