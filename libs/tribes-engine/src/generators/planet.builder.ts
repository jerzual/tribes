import { PlanetModel } from '@tribes-nx/tribes-model';

import SeededBuilder from './seeded.builder';

export const MIN_SIZE = 20;
export const AVAILABLE_SIZE_FACTORS = [1, 4, 9, 20];

/**
 * Created by jibhaine on 04/09/2016.
 */
export default class PlanetBuilder extends SeededBuilder {
  private planet: Partial<PlanetModel>;
  constructor() {
    super();
    this.planet = {};
  }
  public setRandomSize() {
    return this;
  }
  public fillWithChunks() {
    return this;
  }
  public build(): PlanetModel {
    return this.planet as PlanetModel;
  }
}
