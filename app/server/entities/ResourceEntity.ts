import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { GalaxyEntity } from './GalaxyEntity';
import { PlanetEntity } from './PlanetEntity';

@Entity()
export class ResourceEntity {
  @ObjectIdColumn()
  public id?: ObjectID;

  @Column()
  public name?: string;

  @Column()
  public position?: [number, number, number];

  @Column(type => GalaxyEntity)
  public galaxy?: GalaxyEntity;

  @Column(type => PlanetEntity)
  public planets?: PlanetEntity[];
}
