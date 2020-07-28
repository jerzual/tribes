import { createServer } from '@marblejs/core';
import { IO } from 'fp-ts/lib/IO';
import { listener } from './app/http.listener';

import { Connection, createConnection } from 'typeorm';

const { MONGO_TRIBES_URI, MONGOLAB_URI } = process.env;

// env vars
const MONGO_HOST =
  MONGO_TRIBES_URI || MONGOLAB_URI || 'mongodb://localhost:5984/tribes';
const PORT: number = parseInt(process.env.PORT, 10) || 3000;

const connectToDb = async () => {
  console.log('connecting to ', MONGO_HOST);
  try {
    const connection: Connection = await createConnection({
      type: 'mongodb',
      host: MONGO_HOST,
      database: 'tribes',
    });
    connection.runMigrations();
  } catch (err) {
    console.error('error connectiong to db', err);
    process.exit();
  }
};
const server = createServer({
  port: PORT,
  hostname: '127.0.0.1',
  listener,
});

const main: IO<void> = async () => {
  await (await server)();
  await connectToDb();
};
main();
