export const FETCH_PLAYER = '[Player] fetch player';
export const FETCH_PLAYER_SUCCESS = '[Player] fetch player successful';
export const FETCH_PLAYER_FAILURE = '[Player] fetch player failed';

interface PlayerPayload {
  uuid: string;
  name?: string;
}
interface FetchPlayerAction {
  type: typeof FETCH_PLAYER;
  payload: PlayerPayload;
}

interface FetchPlayerSuccessAction {
  type: typeof FETCH_PLAYER_SUCCESS;
  payload: PlayerPayload;
}
interface FetchPlayerFailureAction {
  type: typeof FETCH_PLAYER_FAILURE;
  meta: {
    timestamp: number;
  };
}

export type PlayerActionTypes =
  | FetchPlayerAction
  | FetchPlayerSuccessAction
  | FetchPlayerFailureAction;
