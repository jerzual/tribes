import { r } from '@marblejs/http';
import { getActionsEffect } from './actions.effects';

const getUsers = r.pipe(
  r.matchPath('/api/users'),
  r.matchType('GET'),
  r.useEffect(getActionsEffect),
);
