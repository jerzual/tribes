export enum PlanetType {
  Ice,
  Gaz,
  Desert,
  Rocks,
  Earth,
}

export class PlanetModel {
  seed: string;
  name: string;
  description: string;
  type: PlanetType;
  size: number;
  details: number;
}
