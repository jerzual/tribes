import { filter, mapTo } from 'rxjs/operators';
import { ActionsObservable } from 'redux-observable';

export const pingEpic$ = (action$: ActionsObservable<{ type: 'PING' }>) =>
  action$.pipe(
    filter((action) => action.type === 'PING'),
    mapTo({ type: 'PONG' }),
  );
