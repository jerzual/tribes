import { BuildingEntity } from './building.entity';
import { GalaxyEntity } from './galaxy.entity';
import { MessageEntity } from './message.entity';
import { PlanetEntity } from './planet.entity';
import { Player } from './player.entity';
import { ResourceEntity } from './resource.entity';
import { UnitEntity } from './unit.entity';

export * from './building.entity';
export * from './galaxy.entity';
export * from './message.entity';
export * from './planet.entity';
export * from './player.entity';
export * from './resource.entity';
export * from './unit.entity';

export interface Database {
  building: BuildingEntity;
  galaxy: GalaxyEntity;
  message: MessageEntity;
  planet: PlanetEntity;
  player: Player;
  resource: ResourceEntity;
  unit: UnitEntity;
}
