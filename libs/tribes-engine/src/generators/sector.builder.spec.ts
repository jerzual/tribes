import {
  buildSector,
  MIN_SOLAR_SYSTEMS,
  MAX_SOLAR_SYSTEMS,
} from './sector.builder';

describe('buildSector', () => {
  const gridSize = 16;

  it('produces a deterministic result for the same seed', () => {
    const a = buildSector('SEC01', 0, 0, gridSize);
    const b = buildSector('SEC01', 0, 0, gridSize);
    expect(a.solarSystems.length).toBe(b.solarSystems.length);
    expect(a).toEqual(b);
  });

  it('returns valid sector properties', () => {
    const sector = buildSector('SEC02', 3, 5, gridSize);
    expect(sector.seed).toBe('SEC02');
    expect(sector.row).toBe(3);
    expect(sector.col).toBe(5);
  });

  it('has solar system count within bounds', () => {
    for (let row = 0; row < gridSize; row += 5) {
      for (let col = 0; col < gridSize; col += 5) {
        const sector = buildSector(`R${row}C${col}`, row, col, gridSize);
        expect(sector.solarSystems.length).toBeGreaterThanOrEqual(
          MIN_SOLAR_SYSTEMS,
        );
        expect(sector.solarSystems.length).toBeLessThanOrEqual(
          MAX_SOLAR_SYSTEMS,
        );
      }
    }
  });

  it('has higher density near galaxy center than at corners', () => {
    const center = (gridSize - 1) / 2;
    const centerRow = Math.floor(center);
    const centerCol = Math.floor(center);

    const centerSector = buildSector('CENTR', centerRow, centerCol, gridSize);
    const cornerSector = buildSector('CORNR', 0, 0, gridSize);

    expect(centerSector.solarSystems.length).toBeGreaterThan(
      cornerSector.solarSystems.length,
    );
  });

  it('assigns unique seeds to each solar system', () => {
    const sector = buildSector('UNIQ2', 7, 7, gridSize);
    const seeds = sector.solarSystems.map((ss) => ss.seed);
    expect(new Set(seeds).size).toBe(seeds.length);
  });
});
