import React from 'react';
import { render } from '@testing-library/react';

import { Board } from './board.container';

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = render(<Board></Board>);
  });

  it('has a set of tiles', () => {
    expect(board).toBeDefined();
  });
});
