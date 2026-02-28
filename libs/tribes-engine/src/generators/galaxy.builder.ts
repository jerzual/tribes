import { GalaxyModel, GALAXY_GRID_SIZE, Seed } from '@tribes-nx/tribes-model';

/**
 * Builds a galaxy from a seed string.
 * Creates a 16x16 grid of sector stubs (seed, row, col, empty solarSystems).
 * Use `buildSector` to fully expand a sector with its solar systems and planets.
 * @param seed - seed string for the RNG
 * @returns a GalaxyModel
 */
export function buildGalaxy(seed: string): GalaxyModel {
  const rng = new Seed(seed);

  const sectors = [];
  for (let row = 0; row < GALAXY_GRID_SIZE; row++) {
    const rowSectors = [];
    for (let col = 0; col < GALAXY_GRID_SIZE; col++) {
      const sectorSeed = rng.deriveChildSeed();
      rowSectors.push({
        seed: sectorSeed,
        row,
        col,
        solarSystems: [],
      });
    }
    sectors.push(rowSectors);
  }

  return {
    seed,
    sectors,
  };
}
