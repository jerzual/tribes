import { makeNoise2D } from 'open-simplex-noise';
import * as RNG from 'rng-js';
import { GalaxyModel, Seed } from '@tribes-nx/tribes-model';

const WORLD_SIZE = 256;
export interface WorldBuilderOptions{
  size: number;
  seed?: Seed;
}
export default class WorldBuilder {
  public world = {};
  public tiles: any[][];
  constructor(options: WorldBuilderOptions) {
    this.tiles = [[]];
    // this.noise2d = makeNoise2D(this.seed);
  }

  public generateTerrain(tiles) {
    return tiles;
  }
  public applyBiome(tiles) {
    return tiles;
  }
  public generateResources(tiles) {
    return tiles;
  }
}
