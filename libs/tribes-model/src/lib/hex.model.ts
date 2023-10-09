import { Vector3 } from 'three';

// 6 directions of an hexagon.
export const DIRECTIONS = [
  new Vector3(+1, -1, 0),
  new Vector3(+1, 0, -1),
  new Vector3(0, +1, -1),
  new Vector3(-1, +1, 0),
  new Vector3(-1, 0, +1),
  new Vector3(0, -1, +1),
];
/**
 * Hex is the model of an hexagon.
 * rendered by Hexagon component
 */
export default class HexModel {
  public x = 0;
  public y = 0;
  public z = 0;
  public coords: Vector3;
  public radius: number;
  /**
   * Init with   { radius, coords:{ x,y,z}}
   * @param props
   */
  constructor(props) {
    this.coords = new Vector3(props.coords);

    this.radius = props.radius;
  }
  public toString() {
    return this.x + ',' + this.y + ',' + this.z;
  }
}
