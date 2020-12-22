import { Behavior } from './behavior';

export class Entity {
  public id: string;
  public behaviors: Behavior[] = [];
  constructor() {}
  public update() {}
  public addBehavior(options) {
    // this.push(new Behavior(options));
  }
}
