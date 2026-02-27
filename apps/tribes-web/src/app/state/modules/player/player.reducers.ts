import { nanoid } from 'nanoid';
import {
  FETCH_PLAYER,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE,
} from './player.actions';

export function fetchPlayerReducer(state, action) {
  if (!state) {
    return {
      userAgent: navigator.userAgent,
      uuid: nanoid(),
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
