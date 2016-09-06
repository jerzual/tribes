
import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import inputReducers from './InputReducers'
import entityReducers from './EntityReducers'
import worldReducers from './WorldReducers'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    inputReducers:inputReducers,
    entityReducers:entityReducers,
    worldReducers:worldReducers,
    //errorMessage,
    routing: routerReducer
});


export default rootReducer;