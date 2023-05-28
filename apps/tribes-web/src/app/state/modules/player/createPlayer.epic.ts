import { ajax, AjaxResponse } from 'rxjs/ajax';
import { ofType, Epic } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_PLAYER_FAILURE, FETCH_PLAYER } from './player.actions';

const fetchPlayerFulfilled = (response) => response.response;

export const fetchPlayerEpic$: Epic = (action$) =>
  action$.pipe(
    ofType(FETCH_PLAYER),
    mergeMap((action) =>
      ajax.post(`/api/players/${action.payload}`).pipe(
        map((response) => fetchPlayerFulfilled(response)),
        catchError((error) =>
          of({
            type: FETCH_PLAYER_FAILURE,
            payload: error.xhr.response,
            error: true,
          }),
        ),
      ),
    ),
  );
