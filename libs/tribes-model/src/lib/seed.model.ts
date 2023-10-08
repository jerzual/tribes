'use strict';
import * as seedrandom from 'seedrandom';
export const SEED_LENGTH = 5;
/**
 * Encapsulate a seed string and an RNG
 */
export class Seed {
  public rng: seedrandom.PRNG;
  constructor(private seed: string = Seed.randomString(Math)) {
    this.rng = seedrandom(seed);
  }

  /**
   * Generates a Math.random() human-readable based Seed.
   * @param rng
   * @param rng.random
   */
  public static randomString(rng: { random: () => number }): string {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let randomSeed = '';
    for (let i = 0; i < SEED_LENGTH; i++) {
      randomSeed += CHARS.charAt(Math.floor(rng.random() * CHARS.length));
    }

    return randomSeed;
  }
}
export default Seed;
