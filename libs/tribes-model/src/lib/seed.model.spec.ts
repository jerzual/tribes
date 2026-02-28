import { Seed } from './seed.model';

describe('Seed', () => {
  describe('randomString', () => {
    it('should generate a 5 letters random string', () => {
      const result = Seed.randomString({ random: Math.random });
      expect(result).toHaveLength(5);
    });
  });

  describe('random', () => {
    it('should provide a random number generator instance', () => {
      const seed = new Seed();
      expect(seed.random()).toBeGreaterThanOrEqual(0);
      expect(seed.random()).toBeLessThan(1);
    });

    it('should be deterministic for the same seed', () => {
      const a = new Seed('TEST1');
      const b = new Seed('TEST1');
      expect(a.random()).toBe(b.random());
      expect(a.random()).toBe(b.random());
    });
  });

  describe('randomInt', () => {
    it('should return an integer in [0, max)', () => {
      const seed = new Seed('INTTEST');
      for (let i = 0; i < 20; i++) {
        const val = seed.randomInt(10);
        expect(val).toBeGreaterThanOrEqual(0);
        expect(val).toBeLessThan(10);
        expect(Number.isInteger(val)).toBe(true);
      }
    });
  });

  describe('randomIntRange', () => {
    it('should return an integer in [min, max] (inclusive)', () => {
      const seed = new Seed('RANGET');
      for (let i = 0; i < 50; i++) {
        const val = seed.randomIntRange(5, 10);
        expect(val).toBeGreaterThanOrEqual(5);
        expect(val).toBeLessThanOrEqual(10);
        expect(Number.isInteger(val)).toBe(true);
      }
    });
  });

  describe('pick', () => {
    it('should return an element from the array', () => {
      const seed = new Seed('PICKME');
      const items = ['a', 'b', 'c', 'd'];
      for (let i = 0; i < 20; i++) {
        expect(items).toContain(seed.pick(items));
      }
    });

    it('should be deterministic', () => {
      const a = new Seed('PICK2');
      const b = new Seed('PICK2');
      const items = [1, 2, 3, 4, 5];
      expect(a.pick(items)).toBe(b.pick(items));
    });
  });

  describe('deriveChildSeed', () => {
    it('should return a 5-character string', () => {
      const seed = new Seed('CHILD');
      const child = seed.deriveChildSeed();
      expect(child).toHaveLength(5);
    });

    it('should be deterministic', () => {
      const a = new Seed('CHILD');
      const b = new Seed('CHILD');
      expect(a.deriveChildSeed()).toBe(b.deriveChildSeed());
    });

    it('should produce different seeds on successive calls', () => {
      const seed = new Seed('MULTI');
      const first = seed.deriveChildSeed();
      const second = seed.deriveChildSeed();
      expect(first).not.toBe(second);
    });
  });
});
