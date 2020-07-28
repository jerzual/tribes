import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { GalaxyEntity } from './galaxy.entity';
import { PlanetEntity } from './planet.entity';

@Entity()
export class ResourceEntity {
  @ObjectIdColumn()
  public id?: ObjectID;

  @Column()
  public name?: string;

  @Column()
  public position?: [number, number, number];

  @Column(() => GalaxyEntity)
  public galaxy?: GalaxyEntity;

  @Column(() => PlanetEntity)
  public planets?: PlanetEntity[];
}
