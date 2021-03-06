
/**
 * Cube coordinates.
 * coordinates conversion between hex and a Cube(r,c) coordinate system.
 *
 */
export default class Cube{
    //position
    x;
    y;
    z;
    constructor(props){
        //column
        this.q = props.q;
        //row
        this.r = props.r;
        //cube coordinates
        this.x = props.x;
        this.y = props.y;
        this.z = props.z;
    }

    /**
     * Creates a new Cube from coordinates.
     *
     * @param q
     * @param r
     * @returns {Cube}
     */
    static fromCartesian(q,r){
        return new Cube({q,r,});
    }
    static distance(a, b){
        return (Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)) / 2

    }
}