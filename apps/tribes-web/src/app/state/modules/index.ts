import { combineEpics } from 'redux-observable';

import ping, { pingEpic$ } from './ping';
import { fetchPlayerEpic$, fetchPlayerReducer } from './player';
import { combineReducers } from 'redux';

export const rootEpic = combineEpics(pingEpic$, fetchPlayerEpic$);

export const rootReducer = combineReducers({
  ping,
  fetchPlayerReducer,
});
