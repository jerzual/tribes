import { Vector3 } from 'three';

import { PlanetModel } from './planet.model';

export interface SolarSystemModel {
  seed: string;
  position: Vector3;
  planets: PlanetModel[];
}
