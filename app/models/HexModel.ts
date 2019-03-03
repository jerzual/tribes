import { Vector3 } from 'three';

// 6 directions of an hexagon.
const DIRECTIONS = [
  Vector3(+1, -1, 0),
  Vector3(+1, 0, -1),
  Vector3(0, +1, -1),
  Vector3(-1, +1, 0),
  Vector3(-1, 0, +1),
  Vector3(0, -1, +1),
];
/**
 * Hex is the model of an hexagon.
 * rendered by Hexagon component
 */
export default class HexModel {
  public x = 0;
  public y = 0;
  public z = 0;
  /**
   * Init with   { radius, coords:{ x,y,z}}
   * @param props
   */
  constructor(props) {
    this.coords = new Vector3(props.coords);

    this.radius = props.radius;
  }
  public toString() {
    return x + ',' + y + ',' + z;
  }
}
