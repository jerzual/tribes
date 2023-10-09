import { r } from '@marblejs/http';
import { getActionsEffect } from './actions.effects';

const getActions = r.pipe(
  r.matchPath('/api/actions'),
  r.matchType('GET'),
  r.useEffect(getActionsEffect),
);
