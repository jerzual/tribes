import { Behavior } from './Behavior';

export class Entity {
  public id: string;
  public behaviors: Behavior = [];
  constructor() {
    this.id = uuid.v4();
  }
  public update() {}
  public addBehavior(options) {
    this.push(new Behavior(options));
  }
}
