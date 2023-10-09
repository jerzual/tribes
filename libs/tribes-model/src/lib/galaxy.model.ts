import { PlanetModel } from './planet.model';

/**
 * Created by jibhaine on 04/09/2016.
 * A galaxy is a cube divided by in sectors
 */
const GALAXY_SIZE = 255;

export class GalaxyModel {
  constructor(public seed: string = '', public planets: PlanetModel[] = []) {}
}
