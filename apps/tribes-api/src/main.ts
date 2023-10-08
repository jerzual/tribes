import { bindEagerlyTo, createContextToken } from '@marblejs/core';
import { createServer } from '@marblejs/http';
import { IO } from 'fp-ts/lib/IO';
import * as dotenv from 'dotenv';
dotenv.config();

import { listener } from './app/http.listener';

import { Database } from './app/entities';
import { PostgresDialect, Kysely } from 'kysely';
import { Pool } from 'pg';

const {
  TRIBES_DB_HOST,
  TRIBES_DB_PORT,
  TRIBES_DB_USERNAME,
  TRIBES_DB_PASSWORD,
  TRIBES_API_PORT,
} = process.env;
// env vars
const PORT: number = parseInt(TRIBES_API_PORT, 10) || 3000;

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'test',
    host: TRIBES_DB_HOST,
    user: TRIBES_DB_USERNAME,
    password: TRIBES_DB_PASSWORD,
    port: TRIBES_DB_PORT ? parseInt(TRIBES_DB_PORT, 10) : undefined,
    max: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});

const DatabaseToken = createContextToken<Database>('Database');

const server = createServer({
  port: PORT,
  listener,
  dependencies: [bindEagerlyTo(DatabaseToken)(async () => db)],
});

const main: IO<void> = async () => {
  await (
    await server
  )();
};
main();
