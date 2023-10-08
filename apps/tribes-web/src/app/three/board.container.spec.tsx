import React from 'react';
import { render } from '@testing-library/react';

import { mockResizeObserver } from 'jsdom-testing-mocks';
import { Board } from './board.container';

mockResizeObserver();

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = render(<Board></Board>);
  });

  it('has a set of tiles', () => {
    expect(board).toBeDefined();
  });
});
