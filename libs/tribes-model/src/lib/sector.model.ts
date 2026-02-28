import { SolarSystemModel } from './solar-system.model';

export interface SectorModel {
  seed: string;
  row: number;
  col: number;
  solarSystems: SolarSystemModel[];
}
