/**
 * A Chunk is a reduced part of the map displayed on screen.
 */
export default class Chunk{
    constructor(radius = 5,offset={x:0,y:0}){
        this.tiles = [];
        this.worldOffset = {}
    }
}