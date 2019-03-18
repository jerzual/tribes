import { NextFunction, Request, Response } from 'express';
import * as express from 'express';
import * as path from 'path';

import { Connection, createConnection } from 'typeorm';

const { MONGO_TRIBES_URI, MONGOLAB_URI } = process.env;

const app = express();
// env vars
const MONGO_HOST =
  MONGO_TRIBES_URI || MONGOLAB_URI || 'mongodb://localhost/tribes';
const PORT = process.env.PORT || 3000;

const connectToDb = async () => {
  const connection: Connection = await createConnection({
    type: 'mongodb',
    host: MONGO_HOST,
    port: 27017,
    database: 'test',
  });
  connection.runMigrations();
};

// load parent directory (/app) as static resource
// the server should always be launched from the projectroot directory
if (process.env.NODE_ENV === 'production') {
  // in production mode, parcel outputs in dist dir
  app.use('/', express.static(path.join(process.cwd(), 'dist')));
} else {
  // dev mode, use parcel middleware.
  // tslint:disable-next-line: no-var-requires : fake-positive, requires only in dev.
  const Bundler = require('parcel-bundler');
  const bundler = new Bundler(path.join(process.cwd(), 'app', 'index.pug'));

  bundler.on('buildStart', (entryPoints: any) => {
    // Do something...
    console.log('buildStart', entryPoints);
  });

  bundler.on('buildError', (error: any) => {
    // Do something...
    console.error('buildError', error);
  });
  // first bundle when launching the app.
  bundler.bundle();
  // tell parcel to manage static assets.
  app.use(bundler.middleware());
}
export const server = app.listen(PORT, (err: Error) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('server listening on port: %s', PORT);
});
/*
export function renderPage(req: Request, res: Response, next: NextFunction) {
  res.send();
}
*/
