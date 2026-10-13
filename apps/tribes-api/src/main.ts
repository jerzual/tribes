import { bindEagerlyTo, createContextToken } from '@marblejs/core';
import { createServer } from '@marblejs/http';
import * as dotenv from 'dotenv';
import { IO } from 'fp-ts/lib/IO';
dotenv.config();

import { PostgresDialect, Kysely } from 'kysely';
import { Pool } from 'pg';

import { Database } from './app/entities';
import { listener } from './app/http.listener';

// env vars
// write the above assignation on multiple lines
const TRIBES_DB_HOST = process.env.TRIBES_DB_HOST;
const TRIBES_DB_PORT = process.env.TRIBES_DB_PORT
  ? parseInt(process.env.TRIBES_DB_PORT, 10)
  : undefined;
const TRIBES_DB_USERNAME = process.env.TRIBES_DB_USERNAME;
const TRIBES_DB_PASSWORD = process.env.TRIBES_DB_PASSWORD;
const TRIBES_API_PORT = process.env.TRIBES_API_PORT
  ? parseInt(process.env.TRIBES_API_PORT, 10)
  : 3000;

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'tribes',
    host: TRIBES_DB_HOST,
    user: TRIBES_DB_USERNAME,
    password: TRIBES_DB_PASSWORD,
    port: TRIBES_DB_PORT,
    max: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});

const DB_TOKEN = createContextToken<Database>('Database');

const server = createServer({
  port: TRIBES_API_PORT,
  listener,
  dependencies: [bindEagerlyTo(DB_TOKEN)(() => db)],
});

const main: IO<void> = () => {
  void server.then((s) => s());
};
main();
