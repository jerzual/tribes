import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class GalaxyEntity {
  @ObjectIdColumn()
  public id: ObjectID;

  @Column()
  public seed?: string;

  @Column()
  public name?: string;

  @Column()
  public desc?: string;

  @Column()
  public chunks?: [number, number, number];

  constructor(id: ObjectID) {
    this.id = id;
  }
}
