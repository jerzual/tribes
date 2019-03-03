import FastSimplexNoise, { get2DNoise } from 'fast-simplex-noise';
import RNG from 'rng-js';
import Hex from '../models/HexModel';

const WORLD_SIZE = 256;

export default class WorldBuilder {
  public world = {};

  constructor(options) {
    this.tiles = [[]];
    this.seed = options.seed;
    this.rng = new RNG(this.seed);
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
