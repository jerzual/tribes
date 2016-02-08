import { Vector3 } from 'three'

//6 directions of an hexagon.
const DIRECTIONS = [
    Cube(+1, -1, 0), Cube(+1, 0, -1), Cube(0, +1, -1),
    Cube(-1, +1, 0), Cube(-1, 0, +1), Cube(0, -1, +1)
];
/**
 * Hex is the model of an hexagon.
 * rendered by Hexagon component
 */
export default
class Hex {
    /**
     * Init with   { radius, coords:{ x,y,z}}
     * @param props
     */
    constructor(props) {
        this.coords = new Cube(props.coords);
        this.radius = props.radius;
    }
}