import { Seed } from '@tribes-nx/tribes-model';
/**
 * Created by jibhaine on 04/09/2016.
 */
export default class SeededBuilder {
  protected rng: Seed;
  withSeed(seed: string) {
    this.rng = new Seed(seed).rng;
    return this;
  }
}
