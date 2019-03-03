import { Vector3 } from 'babylonjs';

import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Player {
  @ObjectIdColumn()
  public id?: ObjectID;

  @Column()
  public name?: string;

  @Column(() => Vector3)
  public position?: Vector3;
}
