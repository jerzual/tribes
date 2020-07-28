import { r } from '@marblejs/core';
import { getActionsEffect } from './actions.effects';

const getActions = r.pipe(
  r.matchPath('/api/actions'),
  r.matchType('GET'),
  r.useEffect(getActionsEffect),
);
