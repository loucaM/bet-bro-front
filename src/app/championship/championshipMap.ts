import {Team} from '../teams/team';

export class ChampionshipMap {

  private _championships!: Map<string, Team[]>;

  public constructor(init?: ChampionshipMap) {
    Object.assign(this, init);
  }

  get championships(): Map<string, Team[]> {
    return this._championships;
  }
}
