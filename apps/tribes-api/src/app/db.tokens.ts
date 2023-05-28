import {
  createContextToken,
  reader,
  createReader,
  useContext,
} from '@marblejs/core';
import { pipe } from 'fp-ts/lib/pipeable';
import * as R from 'fp-ts/lib/Reader';
import * as O from 'fp-ts/lib/Option';
import {
  MongoClient,
  MongoRepository as TypeORMMongoRepository,
  getMongoRepository,
  createConnection,
  MongoRepository,
  Connection as TypeORMConnection,
} from 'typeorm';
import { Player } from './entities';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

export const ConnectionOptionsToken =
  createContextToken<MongoConnectionOptions>('ConnectionOptions');
export const ConnectionToken =
  createContextToken<TypeORMConnection>('Connection');
/*
export const PlayerRepositoryToken = createContextToken<
  MongoRepository<Player>
>('PlayerRepository');
*/
export const ConnectionOptions = createReader(
  () =>
    ({
      type: 'mongodb',
      username: process.env.TRIBES_MONGO_USERNAME,
      password: process.env.TRIBES_MONGO_USERNAME,
      host: process.env.TRIBES_MONGO_USERNAME,
      port: Number(process.env.TRIBES_MONGO_PORT || 29717),
    } as MongoConnectionOptions),
);
export const Connection = createReader((ask) => {
  const options = useContext(ConnectionOptionsToken)(ask);
  return createConnection(options);
});
/*
export const ConnectionReader = createReader((ask) =>
  pipe(
    ask(ConnectionToken),
    O.map((v) => v + ', world!'),
    O.getOrElse(() => ''),
  ),
);*/

export const MongoManagerReader = pipe(
  reader,
  R.map(() => 'Hello'),
);
