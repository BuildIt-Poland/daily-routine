import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SettingsPanel from '../SettingsPanel';

afterEach(cleanup);

describe('COMPONENT - SettingsPanel', () => {
  it('renders closed panel correctly', () => {
    const { queryByTestId } = render(<SettingsPanel isVisible={false} onClose={jest.fn()} />);

    expect(queryByTestId('close-button')).toBeNull();
  });

  it('renders opened panel correctly', () => {
    const { getByTestId, container } = render(<SettingsPanel isVisible={true} onClose={jest.fn()} />);

    expect(getByTestId('close-button')).toBeDefined();
    expect(container.querySelector('h2')).toHaveTextContent('My role settings');
  });
});
