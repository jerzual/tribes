import { Component } from 'inferno';
import { BrowserRouter, Link, Route, Router, Switch } from 'inferno-router';

import { Store } from 'reactive-state';
import { enableDevTool } from 'reactive-state/src/devtool';

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
import { StoreProvider } from './stores/StoreProvider';

// This is our global AppState. We use this syntax to clearify that it is an intersection of sub-slices
// used my app modules. We also omit some state slices alltogether for modules that create their own
// (i.e. AdvancedCounter and Todo)
const initialAppState = Object.assign(
  {},
  { counter: 0 },

  // add any other slices here...
);

// named export for tests
export class App extends Component<any, any> {
  // The root store. Note that even if we work with "slices" in reactive-state, there is only a
  // single store throughout the application just as in Redux.
  // By using typeof initialAppState as a type, we make sure the type matches the initialState instance above
  public store: Store<typeof initialAppState> = Store.create(initialAppState);

  public componentWillMount() {
    enableDevTool(this.store);
  }
  public render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Tribes}>
          <div id="app">
            <nav id="menu">
              <Menu />
            </nav>
            <Switch>
              <Route path="credits" component={CreditsScreen} />
              <Route path="options" component={OptionsScreen} />
              <Route path="galaxy/:seed" component={GalaxyScreen}>
                <Route path="sector/:coords" component={SectorScreen} />
              </Route>
              <Route path="planet/:seed" component={PlanetScreen}>
                <Route path="chunk/:coords" component={ChunkScreen} />
              </Route>
            </Switch>
            <View />
          </div>
        </Route>
      </BrowserRouter>
    );
  }
}
