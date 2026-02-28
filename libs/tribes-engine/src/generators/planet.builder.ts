import { PlanetModel, PlanetType, Seed } from '@tribes-nx/tribes-model';

export const MIN_PLANET_SIZE = 20;
export const MAX_PLANET_SIZE = 200;
export const MIN_ORBITAL_RADIUS = 50;
export const MAX_ORBITAL_RADIUS = 500;

const PLANET_TYPES = [
  PlanetType.Ice,
  PlanetType.Gaz,
  PlanetType.Desert,
  PlanetType.Rocks,
  PlanetType.Earth,
];

const PLANET_COLORS: Record<PlanetType, string[]> = {
  [PlanetType.Ice]: ['#a8d8ea', '#cbeef3', '#e0f7fa'],
  [PlanetType.Gaz]: ['#f4a460', '#daa520', '#cd853f'],
  [PlanetType.Desert]: ['#c2b280', '#d2b48c', '#deb887'],
  [PlanetType.Rocks]: ['#808080', '#696969', '#a9a9a9'],
  [PlanetType.Earth]: ['#228b22', '#2e8b57', '#3cb371'],
};

/**
 * Builds a planet from a seed string and orbital index.
 * @param seed - seed string for the RNG
 * @param orbitalIndex - index of this planet's orbit (0-based)
 * @returns a PlanetModel
 */
export function buildPlanet(seed: string, orbitalIndex: number): PlanetModel {
  const rng = new Seed(seed);

  const type = rng.pick(PLANET_TYPES);
  const size = rng.randomIntRange(MIN_PLANET_SIZE, MAX_PLANET_SIZE - 1);
  const details = rng.randomInt(10);

  const colors = PLANET_COLORS[type];
  const mainColor = rng.pick(colors);

  const name = rng.deriveChildSeed();

  const orbitalRadius =
    MIN_ORBITAL_RADIUS +
    ((MAX_ORBITAL_RADIUS - MIN_ORBITAL_RADIUS) * (orbitalIndex + 1)) / 8;

  return {
    seed,
    name,
    description: `Planet ${name}`,
    type,
    size,
    details,
    mainColor,
    orbitalRadius,
  };
}
