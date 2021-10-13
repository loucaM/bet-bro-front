import {Team} from '../teams/team';

export class TeamChampionship {

  private teamChampionship!: ChampionshipMap;

  public constructor(init?: Partial<TeamChampionship>) {
    Object.assign(this, init);
  }


}

export class ChampionshipMap {

  private championships!: Map<string, Team[]>;

  public constructor(init?: ChampionshipMap) {
    Object.assign(this, init);
  }
}


export interface Champions {
  [key: string]: Team[];
}
