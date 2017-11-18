
import RNG from 'rng-js';
import FastSimplexNoise,{get2DNoise} from 'fast-simplex-noise';
import Hex from '../models/Hex';

const WORLD_SIZE=256;

export default class WorldBuilder{

    world = {

    };

    constructor(options) {
        this.tiles = [[]];
        this.seed = options.seed;
        this.rng = new RNG(this.seed);
    }

    generateTerrain(tiles){
        return tiles;
    }
    applyBiome(tiles){
        return tiles;
    }
    generateResources(tiles){
        return tiles;
    }

}