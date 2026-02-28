'use strict';
import seedrandom from 'seedrandom';
export const SEED_LENGTH = 5;
/**
 * Encapsulate a seed string and an RNG
 */
export class Seed {
  private prng: seedrandom.PRNG;
  constructor(private seed: string = Seed.randomString(Math)) {
    this.prng = seedrandom(seed);
  }

  /**
   * Generates a Math.random() human-readable based Seed.
   * @param rng - random number generator object
   * @param rng.random - function returning a random number
   * @returns a random alphanumeric string
   */
  public static randomString(rng: { random: () => number }): string {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let randomSeed = '';
    for (let i = 0; i < SEED_LENGTH; i++) {
      randomSeed += CHARS.charAt(Math.floor(rng.random() * CHARS.length));
    }

    return randomSeed;
  }

  /**
   * Returns a random float in [0, 1)
   * @returns a random float
   */
  public random(): number {
    return this.prng.double();
  }

  /**
   * Returns a random integer in [0, max)
   * @param max - exclusive upper bound
   * @returns a random integer
   */
  public randomInt(max: number): number {
    return Math.floor(this.random() * max);
  }

  /**
   * Returns a random integer in [min, max] (inclusive)
   * @param min - inclusive lower bound
   * @param max - inclusive upper bound
   * @returns a random integer
   */
  public randomIntRange(min: number, max: number): number {
    return min + Math.floor(this.random() * (max - min + 1));
  }

  /**
   * Picks a random element from an array
   * @param array - the array to pick from
   * @returns a random element
   */
  public pick<T>(array: T[]): T {
    return array[this.randomInt(array.length)];
  }

  /**
   * Derives a deterministic child seed string
   * @returns a child seed string
   */
  public deriveChildSeed(): string {
    return Seed.randomString(this);
  }
}
