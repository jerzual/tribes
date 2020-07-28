import React, { Component } from 'react';
import { Route, 
  BrowserRouter as Router, Switch } from 'react-router-dom';

import Console from './components/ui/Console';
import View from './containers/Board';
import Board from './containers/Board';
import { Menu } from './containers/Menu';
import MiniMap from './containers/MiniMap';
import Tribes from './containers/Tribes';
import { ChunkScreen } from './screens/ChunkScreen';
import { CreditsScreen } from './screens/CreditsScreen';
import { GalaxyScreen } from './screens/GalaxyScreen';
import { OptionsScreen } from './screens/OptionsScreen';
import { PlanetScreen } from './screens/PlanetScreen';
import { SectorScreen } from './screens/SectorScreen';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const state: any ={}
// todo init redux-observable
// const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
const store = createStore((state, action) => {
  return state
})

export class App extends Component {
  public render(props) {
    return (
      <Provider store={store}>
        <Router >
          <Route exact path="/">
            <div id="app">
              <Menu />
              <Tribes />
              <Switch>
                <Route path="credits"><CreditsScreen/></Route>
                <Route path="options"><OptionsScreen/></Route>
                <Route path="galaxy/:seed"><GalaxyScreen>
                  <Route path="sector/:coords"><SectorScreen/></Route>
                  </GalaxyScreen>
                </Route>
                <Route path="planet/:seed"><PlanetScreen>
                  <Route path="chunk/:coords"><ChunkScreen/></Route>
                  </PlanetScreen>
                </Route>
              </Switch>
            </div>
          </Route>
        </Router>
      </Provider>
    );
  }
}
