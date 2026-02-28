import { PlanetModel, PlanetType } from './planet.model';

describe('PlanetModel', () => {
  it('can be created as an object literal', () => {
    const planet: PlanetModel = {
      seed: 'ABCDE',
      name: 'Test Planet',
      description: 'A test planet',
      type: PlanetType.Earth,
      size: 100,
      details: 5,
      mainColor: '#00ff00',
      orbitalRadius: 200,
    };
    expect(planet).toBeDefined();
    expect(planet.seed).toBe('ABCDE');
    expect(planet.type).toBe(PlanetType.Earth);
    expect(planet.orbitalRadius).toBe(200);
  });
});
