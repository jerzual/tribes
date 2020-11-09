import { GalaxyModel } from './galaxy.model';

describe('Galaxy', () => {
  let galaxy;
  beforeEach(() => {
    galaxy = new GalaxyModel();
  });
  it('can be constructed ', () => {
    expect(galaxy).toBeDefined();
  });
});
