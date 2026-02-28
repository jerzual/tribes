import {
  buildSolarSystem,
  MIN_PLANETS,
  MAX_PLANETS,
} from './solar-system.builder';

describe('buildSolarSystem', () => {
  it('produces a deterministic result for the same seed', () => {
    const a = buildSolarSystem('SOLAR');
    const b = buildSolarSystem('SOLAR');
    expect(a.planets.length).toBe(b.planets.length);
    expect(a.position.x).toBe(b.position.x);
    expect(a.position.y).toBe(b.position.y);
    expect(a.position.z).toBe(b.position.z);
    expect(a.planets).toEqual(b.planets);
  });

  it('produces different results for different seeds', () => {
    const a = buildSolarSystem('SOL_A');
    const b = buildSolarSystem('SOL_B');
    expect(a.seed).not.toBe(b.seed);
  });

  it('has planet count within bounds', () => {
    const seeds = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF'];
    for (const seed of seeds) {
      const ss = buildSolarSystem(seed);
      expect(ss.planets.length).toBeGreaterThanOrEqual(MIN_PLANETS);
      expect(ss.planets.length).toBeLessThanOrEqual(MAX_PLANETS);
    }
  });

  it('has a position Vector3', () => {
    const ss = buildSolarSystem('POS01');
    expect(ss.position).toBeDefined();
    expect(typeof ss.position.x).toBe('number');
    expect(typeof ss.position.y).toBe('number');
    expect(typeof ss.position.z).toBe('number');
  });

  it('assigns unique seeds to each planet', () => {
    const ss = buildSolarSystem('UNIQ1');
    const seeds = ss.planets.map((p) => p.seed);
    expect(new Set(seeds).size).toBe(seeds.length);
  });

  it('has planets with increasing orbital radii', () => {
    const ss = buildSolarSystem('ORBT1');
    for (let i = 1; i < ss.planets.length; i++) {
      expect(ss.planets[i].orbitalRadius).toBeGreaterThan(
        ss.planets[i - 1].orbitalRadius,
      );
    }
  });
});
