import { Entity } from './Entity';

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
export class ConcreteBehavior {
  public execute(target: Entity) {
    console.log('executing behavior on target', target);
  },
}
