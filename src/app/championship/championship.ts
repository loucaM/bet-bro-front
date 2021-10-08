export class Championship {

  championshipId!: number;
  countryName!: string;
  leagueName!: string;

  public constructor(init?: Partial<Championship>) {
    Object.assign(this, init);
  }
}
