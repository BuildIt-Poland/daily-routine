import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Page from '../Page';

// TODO Investigate document.title not correctly updating on first render after bumping react to 16.9 @blurbyte

// eslint-disable-next-line
function TestComponent({ title }) {
  return (
    <Page title={title}>
      <p>{title ? title : 'Daily Routine'}</p>
    </Page>
  );
}

afterEach(cleanup);

describe('COMPONENT - Page', () => {
  it('renders correctly when no title is passed', () => {
    const { container, rerender } = render(<TestComponent />);
    rerender(<TestComponent />);

    expect(container.querySelector('p')).toHaveTextContent('Daily Routine');
    expect(document.title).toEqual('Daily Routine');
  });

  it('renders correctly when custom title is passed', () => {
    const { container, rerender } = render(<TestComponent title="Front End Engineer" />);
    rerender(<TestComponent title="Front End Engineer" />);

    expect(container.querySelector('p')).toHaveTextContent('Front End Engineer');
    expect(document.title).toEqual('Daily Routine | Front End Engineer');
  });
});
