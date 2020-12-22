import { Entity } from './entity';

/**
 * List of behavior attributes related to a specific entity.
 */
export interface BehaviorAttributes {
  [key: string]: any;
}
export enum BehaviorType {
  Position = 'position',
  Collision = 'collision',
  Movement = 'direction',
}
export interface Behavior {
  type: BehaviorType;
  attributes: BehaviorAttributes;
}
export class ConcreteBehavior<Behavior> {
  constructor() {}
  public execute(target: Entity) {}
}
