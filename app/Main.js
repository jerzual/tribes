import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute , browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import rootReducer from './reducers';
import App from './App';

const reducer = combineReducers({
    rootReducer,
    routing: routerReducer
});

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
);


const store = createStore(
    reducer,
    DevTools.instrument()
);
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <div>
            <App history={history}/>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('tribes')
);