import { r } from '@marblejs/http';
import { getActionsEffect } from './actions.effects';

export const getActions = r.pipe(
  r.matchPath('/api/actions'),
  r.matchType('GET'),
  r.useEffect(getActionsEffect),
);
