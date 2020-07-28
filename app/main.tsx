import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { initialGameState } from './stores/InitialState';


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
