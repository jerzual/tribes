import { createServer, bindEagerlyTo, bindLazilyTo } from '@marblejs/core';
import { IO } from 'fp-ts/lib/IO';
import * as dotenv from 'dotenv';
dotenv.config();

import { listener } from './app/http.listener';

import { Connection, createConnection, Migration } from 'typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import {
  Player,
  PlanetEntity,
  GalaxyEntity,
  UnitEntity,
  ResourceEntity,
  MessageEntity,
  BuildingEntity,
} from './app/entities';
import { ConnectionToken, ConnectionOptionsToken } from './app/db.tokens';

const {
  TRIBES_MONGO_HOST,
  TRIBES_MONGO_PORT,
  TRIBES_MONGO_USERNAME,
  TRIBES_MONGO_PASSWORD,
  TRIBES_API_PORT,
} = process.env;
// env vars
const PORT: number = parseInt(TRIBES_API_PORT, 10) || 3000;

const connectToDb = async () => {
  console.log('connecting to ', TRIBES_MONGO_HOST);
  try {
    const connection: Connection = await createConnection({
      type: 'mongodb',
      name: 'mongo',
      host: TRIBES_MONGO_HOST,
      port: Number(TRIBES_MONGO_PORT),
      database: 'tribes',
      logging: ['query', 'error', 'debug'],
     // authMechanism: '',
     // username: TRIBES_MONGO_USERNAME,
    //:  password: TRIBES_MONGO_PASSWORD,
      entities: [
        Player,
        PlanetEntity,
        GalaxyEntity,
        UnitEntity,
        ResourceEntity,
        MessageEntity,
        BuildingEntity,
      ],
    } as MongoConnectionOptions);
    const migration: Migration[] = await connection.runMigrations();
    migration.forEach((migration) => {
      console.log(migration.name);
    });
  } catch (err) {
    console.error('error connectiong to db', err);
    process.exit();
  }
};
const server = createServer({
  port: PORT,
  hostname: '127.0.0.1',
  listener,
  dependencies: [
    bindEagerlyTo(ConnectionToken)(async () => await (await connectToDb)()),
  ],
});

const main: IO<void> = async () => {
  await (await server)();
  // await connectToDb();
};
main();
