import { SectorModel, Seed } from '@tribes-nx/tribes-model';

import { buildSolarSystem } from './solar-system.builder';

export const MIN_SOLAR_SYSTEMS = 6;
export const MAX_SOLAR_SYSTEMS = 24;

/**
 * Computes the number of solar systems for a sector based on its distance to the galaxy center.
 * @param row - row position in the galaxy grid
 * @param col - column position in the galaxy grid
 * @param galaxyGridSize - size of the galaxy grid
 * @returns the number of solar systems
 */
export function computeSolarSystemCount(
  row: number,
  col: number,
  galaxyGridSize: number,
): number {
  const center = (galaxyGridSize - 1) / 2;
  const distance = Math.sqrt((row - center) ** 2 + (col - center) ** 2);
  const maxDistance = Math.sqrt(2 * center ** 2);
  const normalized = distance / maxDistance;

  return Math.round(
    MAX_SOLAR_SYSTEMS - normalized * (MAX_SOLAR_SYSTEMS - MIN_SOLAR_SYSTEMS),
  );
}

/**
 * Fully builds a sector from a seed string and grid position.
 * Generates all solar systems and their planets.
 * @param seed - seed string for the RNG
 * @param row - row position in the galaxy grid
 * @param col - column position in the galaxy grid
 * @param galaxyGridSize - size of the galaxy grid
 * @returns a SectorModel
 */
export function buildSector(
  seed: string,
  row: number,
  col: number,
  galaxyGridSize: number,
): SectorModel {
  const rng = new Seed(seed);

  const solarSystemCount = computeSolarSystemCount(row, col, galaxyGridSize);

  const solarSystemSeeds: string[] = [];
  for (let i = 0; i < solarSystemCount; i++) {
    solarSystemSeeds.push(rng.deriveChildSeed());
  }

  const solarSystems = solarSystemSeeds.map((ssSeed) =>
    buildSolarSystem(ssSeed),
  );

  return {
    seed,
    row,
    col,
    solarSystems,
  };
}
