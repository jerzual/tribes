import { Behavior } from './behavior';

export class Entity {
  public id: string;
  public behaviors: Behavior[] = [];

  public update() {
    // override in subclass
  }

  public addBehavior(_options: unknown) {
    // this.push(new Behavior(options));
  }
}
