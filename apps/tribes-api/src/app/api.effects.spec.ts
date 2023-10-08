import { createHttpTestBed } from '@marblejs/testing';
import { pipe } from 'fp-ts/lib/function';
import { listener } from './http.listener';

const testBed = createHttpTestBed({ listener });
describe('Api effects', () => {
  test('GET "/" should return 200', async () => {
    const { request, finish } = await testBed();

    const response = await pipe(
      request('GET'),
      request.withPath('/'),
      request.send,
    );
    await finish();
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ message: 'Hello, world!' });
  });
  test('GET "/health" should return 200', async () => {
    const { request, finish } = await testBed();

    const response = await pipe(
      request('GET'),
      request.withPath('/health'),
      request.send,
    );
    await finish();
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ health: { status: 'up' } });
  });
});
