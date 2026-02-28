import { GalaxyModel, GALAXY_GRID_SIZE } from './galaxy.model';

describe('GalaxyModel', () => {
  it('can be created as an object literal', () => {
    const galaxy: GalaxyModel = {
      seed: 'ABCDE',
      sectors: [],
    };
    expect(galaxy).toBeDefined();
    expect(galaxy.seed).toBe('ABCDE');
    expect(galaxy.sectors).toEqual([]);
  });

  it('exports GALAXY_GRID_SIZE as 16', () => {
    expect(GALAXY_GRID_SIZE).toBe(16);
  });
});
