import { HttpErrorEffect } from '@marblejs/http';
import { map } from 'rxjs';

export const error$: HttpErrorEffect = (req$) =>
  req$.pipe(
    map(({ request, error }) => ({
      request,
      status: 500,
      body: { message: error.message },
    })),
  );
