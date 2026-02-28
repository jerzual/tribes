import { PlanetType } from '@tribes-nx/tribes-model';

import {
  buildPlanet,
  MIN_PLANET_SIZE,
  MAX_PLANET_SIZE,
  MIN_ORBITAL_RADIUS,
  MAX_ORBITAL_RADIUS,
} from './planet.builder';

describe('buildPlanet', () => {
  it('produces a deterministic result for the same seed', () => {
    const a = buildPlanet('SEED1', 0);
    const b = buildPlanet('SEED1', 0);
    expect(a).toEqual(b);
  });

  it('produces different results for different seeds', () => {
    const a = buildPlanet('SEED1', 0);
    const b = buildPlanet('SEED2', 0);
    expect(a.seed).not.toBe(b.seed);
  });

  it('returns a valid PlanetModel', () => {
    const planet = buildPlanet('TEST1', 0);
    expect(planet.seed).toBe('TEST1');
    expect(planet.name).toBeDefined();
    expect(planet.name.length).toBe(5);
    expect(planet.description).toContain(planet.name);
    expect(Object.values(PlanetType)).toContain(planet.type);
    expect(planet.size).toBeGreaterThanOrEqual(MIN_PLANET_SIZE);
    expect(planet.size).toBeLessThan(MAX_PLANET_SIZE);
    expect(planet.mainColor).toMatch(/^#[0-9a-f]{6}$/);
    expect(planet.details).toBeGreaterThanOrEqual(0);
    expect(planet.details).toBeLessThan(10);
  });

  it('increases orbital radius with orbital index', () => {
    const p0 = buildPlanet('ORBIT', 0);
    const p1 = buildPlanet('ORBIT', 1);
    const p2 = buildPlanet('ORBIT', 2);
    expect(p1.orbitalRadius).toBeGreaterThan(p0.orbitalRadius);
    expect(p2.orbitalRadius).toBeGreaterThan(p1.orbitalRadius);
  });

  it('keeps orbital radius within bounds', () => {
    for (let i = 0; i < 8; i++) {
      const planet = buildPlanet('BOUND', i);
      expect(planet.orbitalRadius).toBeGreaterThan(MIN_ORBITAL_RADIUS);
      expect(planet.orbitalRadius).toBeLessThanOrEqual(MAX_ORBITAL_RADIUS);
    }
  });
});
