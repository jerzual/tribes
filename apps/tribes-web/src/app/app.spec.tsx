import React from 'react';
import { render } from '@testing-library/react';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

mockResizeObserver();

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(getByText('TRIBES')).toBeTruthy();
  });
});
