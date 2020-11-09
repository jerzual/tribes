import { r, useContext } from '@marblejs/core';
import { mapTo, map, tap } from 'rxjs/operators';
import { ConnectionOptions, Connection, ConnectionToken } from './db.tokens';

export const api$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect((req$) =>
    req$.pipe(mapTo({ body: { message: 'Hello, world!' } })),
  ),
);

export const health$ = r.pipe(
  r.matchPath('/health'),
  r.matchType('GET'),
  r.useEffect((req$) =>
    req$.pipe(mapTo({ body: { health: { status: 'up' } } })),
  ),
);
