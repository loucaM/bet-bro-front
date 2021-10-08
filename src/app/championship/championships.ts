import {Championship} from './championship';

// @ts-ignore
export class Championships {

  championships: Championship[] = [];

  public constructor(init?: Partial<Championships>) {
    Object.assign(this, init);
  }
}
