import { Seed } from '@tribes-nx/tribes-model';

export interface WorldBuilderOptions {
  size: number;
  seed?: Seed;
}
export default class WorldBuilder {
  public world = {};
  public tiles: unknown[][];
  constructor(_options: WorldBuilderOptions) {
    this.tiles = [[]];
  }

  public generateTerrain(tiles: unknown[][]) {
    return tiles;
  }
  public applyBiome(tiles: unknown[][]) {
    return tiles;
  }
  public generateResources(tiles: unknown[][]) {
    return tiles;
  }
}
