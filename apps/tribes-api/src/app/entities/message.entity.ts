import { Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class MessageEntity {
  @ObjectIdColumn()
  public id?: ObjectID;
}
