import { GalaxyModel } from 'models/GalaxyModel';
import SeededBuilder from './SeededBuilder';
/**
 * Created by jibhaine on 04/09/2016.
 */
export default class GalaxyBuilder extends SeededBuilder {
  constructor(options: any) {
    super(options);
  }
  public build(): GalaxyModel {
    return new GalaxyModel('42');
  }
}
