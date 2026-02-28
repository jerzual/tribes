import { SectorModel } from './sector.model';

export const GALAXY_GRID_SIZE = 16;

export interface GalaxyModel {
  seed: string;
  sectors: SectorModel[][];
}
