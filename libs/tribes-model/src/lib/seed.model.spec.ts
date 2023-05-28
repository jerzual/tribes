import { Seed } from './seed.model';

describe('Seed', () => {
  describe('randomString', () => {
    it('should generate a 5 letters random string', () => {
      const result = Seed.randomString({ random: Math.random });
      expect(result).toHaveLength(5);
    });
  });
  describe('encapsulate RNG', () => {
    it('should provide a random number generator instance', () => {
      const system: Seed = new Seed();
      expect(system.rng).toBeDefined();
    });
  });
});
