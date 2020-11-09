import { Reducer } from 'redux';
export * from './ping.epic';
export * from './ping.actions';

export const pingReducer: Reducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case 'PING':
      return { isPinging: true };

    case 'PONG':
      return { isPinging: false };

    default:
      return state;
  }
};

export default pingReducer;