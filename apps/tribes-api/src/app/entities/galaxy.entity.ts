import { Generated } from 'kysely';

export interface GalaxyEntity {
  id: Generated<number>;

  seed?: string;

  name?: string;

  desc?: string;

  chunks?: [number, number, number];
}
