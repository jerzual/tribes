import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import ping, { pingEpic$ } from './ping';
import { fetchPlayerEpic$, fetchPlayerReducer } from './player';

export const rootEpic = combineEpics(pingEpic$, fetchPlayerEpic$);

export const rootReducer = combineReducers({
  ping,
  player: fetchPlayerReducer,
});
