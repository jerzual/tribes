import { ofType } from 'redux-observable';
import { map } from 'rxjs';

export const pingEpic$ = (action$) =>
  action$.pipe(
    ofType('PING'),
    map(() => ({ type: 'PONG' })),
  );
