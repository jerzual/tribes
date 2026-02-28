import { GALAXY_GRID_SIZE } from '@tribes-nx/tribes-model';

import { buildGalaxy } from './galaxy.builder';

describe('buildGalaxy', () => {
  it('produces a deterministic result for the same seed', () => {
    const a = buildGalaxy('ABCD');
    const b = buildGalaxy('ABCD');
    expect(a.sectors.length).toBe(b.sectors.length);
    expect(a.sectors[0][0].seed).toBe(b.sectors[0][0].seed);
    expect(a.sectors[15][15].seed).toBe(b.sectors[15][15].seed);
  });

  it('creates a 16x16 grid of sectors', () => {
    const galaxy = buildGalaxy('GRID');
    expect(galaxy.sectors.length).toBe(GALAXY_GRID_SIZE);
    for (const row of galaxy.sectors) {
      expect(row.length).toBe(GALAXY_GRID_SIZE);
    }
  });

  it('stores the seed on the galaxy', () => {
    const galaxy = buildGalaxy('MYSD');
    expect(galaxy.seed).toBe('MYSD');
  });

  it('assigns correct row/col to each sector', () => {
    const galaxy = buildGalaxy('CORD');
    for (let row = 0; row < GALAXY_GRID_SIZE; row++) {
      for (let col = 0; col < GALAXY_GRID_SIZE; col++) {
        expect(galaxy.sectors[row][col].row).toBe(row);
        expect(galaxy.sectors[row][col].col).toBe(col);
      }
    }
  });

  it('gives each sector a unique seed', () => {
    const galaxy = buildGalaxy('UNIQ');
    const seeds = galaxy.sectors.flat().map((s) => s.seed);
    expect(new Set(seeds).size).toBe(seeds.length);
  });

  it('creates sector stubs with empty solarSystems', () => {
    const galaxy = buildGalaxy('STUB');
    expect(galaxy.sectors[0][0].solarSystems).toEqual([]);
  });
});
