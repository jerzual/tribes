import * as ActionTypes from '../constants/ActionTypes'
import {combineReducers} from 'redux';

/**
 * Maps entities world to game chunks.
 *
 * @param state
 */
export function worldToChunkReducer(state, action) {

}

export function worldHeightBoardersReducer(state, action) {

}

export const worldReducers = combineReducers(worldToChunkReducer, worldHeightBoardersReducer);