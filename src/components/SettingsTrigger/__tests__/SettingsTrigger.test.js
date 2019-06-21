import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import SettingsTrigger from '../SettingsTrigger';

afterEach(cleanup);

describe('COMPONENT - SettingsTrigger', () => {
  it('renders closed settings panel correctly', () => {
    const { queryByTestId } = render(<SettingsTrigger />);

    expect(queryByTestId('gear-button')).toBeTruthy();
    // Check if close button exists
    expect(queryByTestId('close-button')).toBeNull();
  });

  it('renders settings panel correctly after it got opened', () => {
    const { getByTestId, container } = render(<SettingsTrigger />);

    fireEvent.click(getByTestId('gear-button'));

    expect(getByTestId('close-button')).toBeDefined();
    expect(container.querySelector('h2')).toHaveTextContent('My role settings');
  });
});
