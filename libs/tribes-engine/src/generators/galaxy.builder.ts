import { GalaxyModel } from '@tribes-nx/tribes-model';

import SeededBuilder from './seeded.builder';
/**
 * Created by jibhaine on 04/09/2016.
 */
export default class GalaxyBuilder extends SeededBuilder {
  public build(): GalaxyModel {
    return {
      // uuid: v4(),
    } as GalaxyModel;
  }
}
