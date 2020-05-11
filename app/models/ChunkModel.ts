import HexModel from './HexModel';

/**
 * A Chunk is a reduced part of the map displayed on screen.
 */
export default class ChunkModel {
  private tiles: { [id: string]: any };
  private worldOffset;
  constructor(private radius = 5, private offset = { x: 0, y: 0, z: 0 }) {
    // Map of Hex
    this.tiles = {};
    // init hexagon circle. :
    for (let x = -radius; x <= radius; x++) {
      for (let y = -radius; y <= radius; y++) {
        for (let z = -radius; z <= radius; z++) {
          const coords = offset.x + x + ',' + y + ',' + z;
          this.tiles[coords] = new HexModel({ x: x + offset.x, y, z });
        }
      }
    }
    this.worldOffset = offset || {};
  }
  public getHexAt(x, y, z) {
    const coords = x + ',' + y + ',' + z;
    return this.tiles[coords];
  }
  public getNeighbours(x, y, z, radius = 1) {
    return this.tiles.filter(hex => {
      return (
        x !== hex.x &&
        y !== hex.y &&
        z !== hex.z &&
        (x >= hex.x - radius && y >= hex.y - radius && z >= hex.z - radius) &&
        (x <= hex.x + radius && y <= hex.y + radius && z <= hex.z + radius)
      );
    });
  }
  public initFromWorld(world) {
    return world.tiles
      .filter(hex => {
        const xInside =
          hex.x < this.offset.x + this.radius &&
          hex.x > this.offset.x - this.radius;
        const yInside =
          hex.y < this.offset.y + this.radius &&
          hex.y > this.offset.y - this.radius;
        return xInside && yInside;
      })
      .map(hex => {
        return this.getHexAt(hex.x, hex.y, hex.z);
      });
  }
}
