import { App } from 'App';
import { renderToString } from 'inferno-server';

export function renderApp() {
  return renderToString(App);
}
