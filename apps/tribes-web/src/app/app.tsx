import React, { FunctionComponent } from 'react';
import { BehaviorSubject } from 'rxjs';

import { switchMap } from 'rxjs/operators';
import './app.scss';

import { ReactComponent as Logo } from './logo.svg';

import { Route, Link } from 'react-router-dom';
import { rootEpic } from './state/modules/root.epic';
import { rootReducer } from './state/modules';
import { createEpicMiddleware } from 'redux-observable';
import { compose, applyMiddleware, createStore } from 'redux';
import { environment } from '../environments/environment.prod';
import { Board } from './three/board.container';
import { Card } from './ui/card.layout';

export const epicMiddleware = createEpicMiddleware();
const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);

if (environment.livereload) {
  const epic$ = new BehaviorSubject(rootEpic);
  // Every time a new epic is given to epic$ it
  // will unsubscribe from the previous one then
  // call and subscribe to the new one because of
  // how switchMap works
  const hotReloadingEpic = (actions$, state$, deps) =>
    epic$.pipe(switchMap((epic) => epic(actions$, state$, deps)));

  epicMiddleware.run(hotReloadingEpic);

  if (module['hot']) {
    module['hot'].accept('./epics/root.epic', () => {
      const nextRootEpic = import('./state/modules/root.epic').then(
        (module) => {
          epic$.next(module.rootEpic);
        },
      );
    });
  }
}
export const App: FunctionComponent = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to tribes-web!</h1>
      </header>
      <main>
        <h2>Player &amp; Infos</h2>
        <p>Thank you for using and showing some ♥ for Nx.</p>
        <Board></Board>
      </main>

      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <Card>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </Card>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <Card>
            <Link to="/">Click here to go back to root page.</Link>
          </Card>
        )}
      />
      {/* END: routes */}
    </div>
  );
};

export default App;
