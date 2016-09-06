'use strict';
import RNG from 'rng-js';
export const SEED_LENGTH = 5;
/**
 * Encapsulate a seed string and an RNG
 */
export class Seed {

    constructor(seed) {
        this.string = seed ? seed.string : this.randomString(Math);
        this.rng = new RNG(this.string);
    }

    /**
     * Generates a Math.random() human-readable based Seed.
     */
    static randomString(rng) {
        const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        var randomSeed = "";
        for (let i = 0; i < SEED_LENGTH; i++) {
            randomSeed += CHARS.charAt(Math.floor(rng.random() * CHARS.length));
        }

        return randomSeed;
    }
}
export default Seed;
