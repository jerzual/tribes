import { App } from 'App';
import ReactDOMServer from 'react-dom/server';

export function renderApp() {
  return ReactDOMServer.renderToString(App);
}
