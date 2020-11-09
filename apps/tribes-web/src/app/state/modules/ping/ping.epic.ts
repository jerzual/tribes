import { filter, mapTo } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActionsObservable } from 'redux-observable';

export const pingEpic$ = (action$: ActionsObservable<{type: "PING"}>) =>
  action$.pipe(
    filter((action) => action.type === 'PING'),
    mapTo({ type: 'PONG' }),
  );
