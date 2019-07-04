import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { GenderProvider } from '../../../context/GenderContext';
import SettingsPanel from '../SettingsPanel';

afterEach(cleanup);

describe('COMPONENT - SettingsPanel', () => {
  it('renders closed panel correctly', () => {
    const { queryByTestId } = render(
      <GenderProvider>
        <SettingsPanel isVisible={false} onClose={jest.fn()} />
      </GenderProvider>
    );

    expect(queryByTestId('close-button')).toBeNull();
  });

  it('renders opened panel correctly', () => {
    const { getByTestId, container } = render(
      <GenderProvider>
        <SettingsPanel isVisible={true} onClose={jest.fn()} />
      </GenderProvider>
    );

    expect(getByTestId('close-button')).toBeDefined();
    expect(container.querySelector('h2')).toHaveTextContent('My role settings');
  });
});
