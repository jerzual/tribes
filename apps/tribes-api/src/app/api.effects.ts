import { r } from '@marblejs/http';
import { map } from 'rxjs/operators';

export const api$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect((req$) =>
    req$.pipe(map(() => ({ body: { message: 'Hello, world!' } }))),
  ),
);

export const health$ = r.pipe(
  r.matchPath('/health'),
  r.matchType('GET'),
  r.useEffect((req$) =>
    req$.pipe(map(() => ({ body: { health: { status: 'up' } } }))),
  ),
);
