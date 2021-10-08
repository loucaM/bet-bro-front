export class Team {

  acronym!: string;
  fullName!: string;
  creationDate!: Date;
  championshipId!: number;

  public constructor(init?: Partial<Team>) {
  Object.assign(this, init);
}
}
