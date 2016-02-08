import {combineReducers} from 'redux';

function playerUnitsReducer(state,action){

}
function resourcesReducer(state,action){

}

export const entityReducers = combineReducers(
    playerUnitsReducer,
    resourcesReducer
);