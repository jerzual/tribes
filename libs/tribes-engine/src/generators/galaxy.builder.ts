import { GalaxyModel } from '@tribes-nx/tribes-model';
import { v4 } from 'uuid';

import SeededBuilder from './seeded.builder';
/**
 * Created by jibhaine on 04/09/2016.
 */
export default class GalaxyBuilder extends SeededBuilder {
  constructor(options: any) {
    super(options);
  }
  public build(): GalaxyModel {
    return {
      // uuid: v4(),
    } as GalaxyModel;
  }
}
