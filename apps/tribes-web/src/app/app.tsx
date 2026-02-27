import { FunctionComponent } from 'react';
import { BehaviorSubject } from 'rxjs';

import { switchMap } from 'rxjs';
import './app.scss';

import { Route, Link, Routes } from 'react-router-dom';
import { createEpicMiddleware } from 'redux-observable';
import { compose, applyMiddleware, createStore } from 'redux';
import { environment } from '../environments/environment';
import { rootEpic$ } from './state/modules/root.epic';
import { rootReducer } from './state/modules';
import { Board } from './three/board.container';
import { Menu } from './ui/menu.component';
import OptionsScreen from './screens/options.screen';
import { ChunkScreen } from './screens/chunk.screen';

export const epicMiddleware = createEpicMiddleware();
const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic$);

if (environment.livereload) {
  const epic$ = new BehaviorSubject(rootEpic$);
  // Every time a new epic is given to epic$ it
  // will unsubscribe from the previous one then
  // call and subscribe to the new one because of
  // how switchMap works
  const hotReloadingEpic$ = (actions$, state$, deps) =>
    epic$.pipe(
      switchMap((currentEpic$) => currentEpic$(actions$, state$, deps)),
    );

  epicMiddleware.run(hotReloadingEpic$);

  if (import.meta.hot) {
    import.meta.hot.accept('./state/modules/root.epic', (module) => {
      if (module) {
        epic$.next(module.rootEpic$);
      }
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
      <Menu></Menu>
      <Board></Board>
      <Routes>
        <Route path="/" element={<ChunkScreen />}></Route>
        <Route path="/options" element={<OptionsScreen></OptionsScreen>} />
        <Route
          path="/world"
          element={<Link to="/">Click here to go back to root page.</Link>}
        />
      </Routes>
    </div>
  );
};

export default App;
