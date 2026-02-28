import { Seed, SolarSystemModel } from '@tribes-nx/tribes-model';
import { Vector3 } from 'three';

import { buildPlanet } from './planet.builder';

export const MIN_PLANETS = 2;
export const MAX_PLANETS = 8;
export const SECTOR_EXTENT = 1000;

/**
 * Builds a solar system from a seed string.
 * @param seed - seed string for the RNG
 * @returns a SolarSystemModel
 */
export function buildSolarSystem(seed: string): SolarSystemModel {
  const rng = new Seed(seed);

  const position = new Vector3(
    (rng.random() - 0.5) * SECTOR_EXTENT,
    (rng.random() - 0.5) * SECTOR_EXTENT,
    (rng.random() - 0.5) * SECTOR_EXTENT,
  );

  const planetCount = rng.randomIntRange(MIN_PLANETS, MAX_PLANETS);

  const planetSeeds: string[] = [];
  for (let i = 0; i < planetCount; i++) {
    planetSeeds.push(rng.deriveChildSeed());
  }

  const planets = planetSeeds.map((planetSeed, index) =>
    buildPlanet(planetSeed, index),
  );

  return {
    seed,
    position,
    planets,
  };
}
