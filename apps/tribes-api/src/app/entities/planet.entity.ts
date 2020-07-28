import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity()
export class PlanetEntity {
  @ObjectIdColumn()
  public id?: ObjectID;

  @Column()
  public name?: string;
}