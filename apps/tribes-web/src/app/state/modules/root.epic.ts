import { combineEpics, Epic } from 'redux-observable';
import { catchError } from 'rxjs';

const epics = [];

export const rootEpic$: Epic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error: unknown, source$) => {
      // eslint-disable-next-line no-console
      console.error(error);
      return source$;
    }),
  );
