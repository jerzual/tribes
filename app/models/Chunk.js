/**
 * A Chunk is a reduced part of the map displayed on screen.
 */
export default class Chunk {
    constructor(radius = 5, offset = {x: 0, y: 0, z:0}) {
        //Map of Hex
        this.tiles = {};
        //init hexagon circle. :
        for (let x = -radius; x <= radius; x++) {
            for (let y = -radius; y <= radius; y++) {
                for (let z = -radius; z <= radius; z++) {
                    let coords = offset.x+x+','+y+','+z;
                    this.tiles[coords] = new Hex({x:x+offset.x,y,z});
                }
            }
        }
        this.worldOffset = offset || {};

    }
    getHexAt(x,y,z){
        let coords = x+','+y+','+z;
        return this.tiles[coords];
    }
    getNeighbours(x,y,z,radius=1){
        return this.tiles.filter((hex)=>{
            return (x != hex.x && y != hex.y && z !=hex.z)
                && (x >= hex.x-radius && y >= hex.y-radius && z >= hex.z-radius)
                && (x <= hex.x+radius && y <= hex.y+radius && z <= hex.z+radius);
        })
    }
    initFromWorld(world) {
        return world.tiles.filter((hex)=> {
            let xInside = (hex.x < this.offset.x + this.radius && hex.x > this.offset.x - this.radius );
            let yInside = (hex.y < this.offset.y + this.radius && hex.y > this.offset.y - this.radius );
            return xInside && yInside;
        }).map((hex)=> {
            return this.getHexAt([hex.x][hex.y]);
        });
    }
}