import { PlanetModel } from './planet.model';

describe('has a facebookId ', () => {
  let planet;
  beforeEach(() => {
    planet = new PlanetModel();
  });
  it('can be constructed ', () => {
    expect(planet).toBeDefined();
  });
});
