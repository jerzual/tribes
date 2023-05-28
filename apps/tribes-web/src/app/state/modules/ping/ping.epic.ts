import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

export const pingEpic$ = (action$) =>
  action$.pipe(
    ofType('PING'),
    map(() => ({ type: 'PONG' })),
  );
