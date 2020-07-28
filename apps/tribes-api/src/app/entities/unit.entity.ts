import { Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class UnitEntity {
  @ObjectIdColumn()
  public id?: ObjectID;
}
