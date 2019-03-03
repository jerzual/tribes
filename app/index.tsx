import { render } from 'inferno';
import { Store } from 'reactive-state';
import { App } from './App';
import { initialGameState } from './stores/InitialState';
import { StoreProvider } from './stores/StoreProvider';

const store = Store.create(initialGameState());
// const history = syncHistoryWithStore(browserHistory, store);
// tslint:disable:no-string-literal : its only for dev
if (module['hot']) {
  module['hot'].dispose(() => {
    // module is about to be replaced
    console.log('[HMR] disposed');
  });

  module['hot'].accept(() => {
    // module or one of its dependencies was just updated
    console.log('[HMR] accepted');
  });
}

if (document) {
  document.addEventListener('DOMContentLoaded', () => {
    render(<App />, document.getElementById('tribes'));
  });
}
