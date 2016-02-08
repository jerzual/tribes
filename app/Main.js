import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './reducers';
import App from './App';

const history = createHistory();
const middleware = syncHistory(history);
const reducer = combineReducers({
    rootReducer,
    routing: routeReducer
});

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
);

const finalCreateStore = compose(
    applyMiddleware(middleware),
    DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducer);
middleware.listenForReplays(store);

render(
    <Provider store={store}>
        <div>
            <App history={history}/>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('tribes')
);