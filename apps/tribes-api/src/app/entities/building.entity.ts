import { Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class BuildingEntity {
  @ObjectIdColumn()
  public id?: ObjectID;
}
