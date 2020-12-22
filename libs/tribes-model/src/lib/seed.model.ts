'use strict';
import * as RNG from 'rng-js';
export const SEED_LENGTH = 5;
/**
 * Encapsulate a seed string and an RNG
 */
export class Seed {
  public rng: RNG;
  constructor(private seed: string = Seed.randomString(Math)) {
    this.rng = new RNG(seed);
  }

  /**
   * Generates a Math.random() human-readable based Seed.
   */
  public static randomString(rng: { random: () => number }) {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let randomSeed = '';
    for (let i = 0; i < SEED_LENGTH; i++) {
      randomSeed += CHARS.charAt(Math.floor(rng.random() * CHARS.length));
    }

    return randomSeed;
  }
}
export default Seed;
