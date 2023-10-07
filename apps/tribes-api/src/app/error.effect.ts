import { HttpErrorEffect, HttpRequest, HttpError } from '@marblejs/http';
import { map } from 'rxjs/operators';

export const error$: HttpErrorEffect = (req$) =>
  req$.pipe(
    map(({ request, error }) => ({
      request,
      status: 500,
      body: { message: error.message },
    })),
  );
