import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Page from '../Page';

afterEach(cleanup);

describe('COMPONENT - Page', () => {
  it('renders correctly when no title is passed', () => {
    const { container } = render(
      <Page>
        <p>Daily Routine!</p>
      </Page>
    );

    expect(container.querySelector('p')).toHaveTextContent('Daily Routine!');
    expect(document.title).toEqual('Daily Routine');
  });

  it('renders correctly when custom title is passed', () => {
    const { container } = render(
      <Page title="Front End Engineer">
        <p>Front End Engineer!</p>
      </Page>
    );

    expect(container.querySelector('p')).toHaveTextContent('Front End Engineer!');
    expect(document.title).toEqual('Daily Routine | Front End Engineer');
  });
});
