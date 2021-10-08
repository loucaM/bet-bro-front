import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Championships} from '../championship/championships';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {
  championshipsUrl = 'http://localhost:8080/bet-bro/public/v1/championships';

  constructor(private http: HttpClient) {
  }

  getChampionships(): Observable<Championships> {
    return this.http.get<Championships>(this.championshipsUrl);
  }

}
