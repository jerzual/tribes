import { Entity } from './entity';

/**
 * List of behavior attributes related to a specific entity.
 */
export interface BehaviorAttributes {
  [key: string]: unknown;
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
export class ConcreteBehavior {
  public execute(_target: Entity) {
    // override in subclass
  }
}
