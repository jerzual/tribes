import { GALAXY_GRID_SIZE } from '@tribes-nx/tribes-model';
import { expect, describe, it } from 'vitest';

import { buildGalaxy } from './galaxy.builder';
import { buildSector } from './sector.builder';

describe('world generation performance', () => {
  it('fully generates a galaxy within a reasonable time', () => {
    const seed = 'PERF1';

    const start = performance.now();

    const galaxy = buildGalaxy(seed);

    const sectors = galaxy.sectors
      .flat()
      .map((stub) =>
        buildSector(stub.seed, stub.row, stub.col, GALAXY_GRID_SIZE),
      );

    const elapsed = performance.now() - start;

    const totalSolarSystems = sectors.reduce(
      (sum, s) => sum + s.solarSystems.length,
      0,
    );
    const totalPlanets = sectors.reduce(
      (sum, s) =>
        sum + s.solarSystems.reduce((ps, ss) => ps + ss.planets.length, 0),
      0,
    );

    /* eslint-disable no-console */
    console.log(`--- World generation benchmark ---`);
    console.log(`Seed:           ${seed}`);
    console.log(`Sectors:        ${sectors.length}`);
    console.log(`Solar systems:  ${totalSolarSystems}`);
    console.log(`Planets:        ${totalPlanets}`);
    console.log(`Time:           ${elapsed.toFixed(2)} ms`);
    /* eslint-enable no-console */

    // Sanity checks
    expect(sectors.length).toBe(GALAXY_GRID_SIZE * GALAXY_GRID_SIZE);
    expect(totalSolarSystems).toBeGreaterThan(0);
    expect(totalPlanets).toBeGreaterThan(0);

    // Should complete well under 5 seconds
    expect(elapsed).toBeLessThan(5000);
  });
});
