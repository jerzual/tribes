import { PlanetModel } from '@tribes-nx/tribes-model';

import SeededBuilder from './seeded.builder';

export const MIN_SIZE = 20;
export const AVAILABLE_SIZE_FACTORS = [1, 4, 9, 20];

/**
 * Created by jibhaine on 04/09/2016.
 */
export default class PlanetBuilder extends SeededBuilder {
  constructor(options: any, private planet: PlanetModel) {
    super(options);
    this.planet = planet;
  }
  public setRandomSize() {
    // nada
  }
  public fillWithChunks() {
    // nada
  }
  public build() {
    return this.planet;
  }
}
