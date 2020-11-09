import { initialGameState } from './initialState';
import { createEpicMiddleware } from 'redux-observable';
import { compose, Store, createStore, applyMiddleware } from 'redux'; 
import { rootReducer } from './modules';
import { rootEpic } from './modules/root.epic';
export * from "./initialState";
export const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
export default function configureStore(): Store {
    
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}
