import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import SlidingPanel from '../SlidingPanel';

afterEach(cleanup);

describe('COMPONENT - SlidingPanel', () => {
  it('renders closed SlidingPanel', () => {
    const { container } = render(<SlidingPanel />);

    expect(container).toMatchSnapshot();
  });
  it('renders SlidingPanel component after clicking GearButton', () => {
    const { getByTestId, container } = render(<SlidingPanel />);

    fireEvent.click(getByTestId('gear-button'));

    expect(container.querySelector('h2')).toHaveTextContent('My role settings');
  });
});
