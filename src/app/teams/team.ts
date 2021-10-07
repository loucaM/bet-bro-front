export class Team {

  acronym!: string;
  fullName!: string;
  creationDate!: Date;

  public constructor(init?: Partial<Team>) {
  Object.assign(this, init);
}
}
