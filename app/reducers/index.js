
import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import inputReducers from './InputReducers'
import entityReducers from './EntityReducers'
import worldReducers from './WorldReducers'
import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    inputReducers,
    entityReducers,
    worldReducers,
    //errorMessage,
    routing: routeReducer
});


export default rootReducer;