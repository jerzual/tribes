import { Action } from 'redux';
import { v4 } from 'uuid';
import {
  FETCH_PLAYER,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE,
  PlayerActionTypes,
} from './player.actions';

export function fetchPlayerReducer(state, action) {
  if (!state) {
    return {
      userAgent: navigator.userAgent,
      uuid: v4(),
    };
  }
  switch (action.type) {
    case FETCH_PLAYER:
      return { ...state, state: 'pending', uuid: action.payload.uuid };
    case FETCH_PLAYER_SUCCESS:
      break;
    case FETCH_PLAYER_FAILURE:
      break;
    default:
      return state;
  }
}
