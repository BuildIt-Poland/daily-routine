import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Error from '../Error';

afterEach(cleanup);

describe('COMPONENT - Error', () => {
  it('renders correctly with default message', () => {
    const { container } = render(<Error />);

    expect(container.querySelector('div')).toHaveTextContent('Oops, something went wrong.');
  });

  it('renders correctly with custom message', () => {
    const customMessage = 'Oh, another error.';
    const { container } = render(<Error message={customMessage} />);

    expect(container.querySelector('div')).toHaveTextContent(customMessage);
  });
});
