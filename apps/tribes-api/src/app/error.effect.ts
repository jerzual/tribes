import { HttpErrorEffect, HttpRequest, HttpError } from '@marblejs/core';
import { map } from 'rxjs/operators';

export const error$: HttpErrorEffect = (req$) =>
  req$.pipe(
    map((entry: { req: HttpRequest<any>; error: HttpError }) => ({
      status: 500,
      body: {
        error: { trace: entry.error.status, message: entry.error.message },
      },
    })),
  );
