import { ColumnType, Generated } from 'kysely';

import { GalaxyEntity } from './galaxy.entity';
import { PlanetEntity } from './planet.entity';

export interface ResourceEntity {
  id?: Generated<number>;

  name?: string;

  position?: [number, number, number];

  galaxy?: GalaxyEntity;

  planets?: PlanetEntity[];

  created_at: ColumnType<Date, string | undefined, never>;
}
