import { combineEpics, ActionsObservable, Epic } from 'redux-observable';
import { catchError } from 'rxjs/operators';

const epics = [];

export const rootEpic: Epic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );
