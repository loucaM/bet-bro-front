import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {Team} from '../teams/team';
import {HttpClient} from '@angular/common/http';

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
}
