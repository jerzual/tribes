import { Vector3 } from 'three';

//6 directions of an hexagon.
const DIRECTIONS = [
    Vector3(+1, -1, 0), Vector3(+1, 0, -1), Vector3(0, +1, -1),
    Vector3(-1, +1, 0), Vector3(-1, 0, +1), Vector3(0, -1, +1)
];
/**
 * Hex is the model of an hexagon.
 * rendered by Hexagon component
 */
export default
class Hex {
    x=0;
    y=0;
    z=0;
    /**
     * Init with   { radius, coords:{ x,y,z}}
     * @param props
     */
    constructor(props) {
        this.coords = new Vector3(props.coords);

        this.radius = props.radius;
    }
    toString(){
        return x+','+y+','+z;
    }
}