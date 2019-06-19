import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import SettingsTrigger from '../SettingsTrigger';

afterEach(cleanup);

describe('COMPONENT - SettingsTrigger', () => {
  it('renders closed SettingsTrigger', () => {
    const { container } = render(<SettingsTrigger />);

    expect(container).toMatchSnapshot();
  });
  it('renders SettingsTrigger component after clicking GearButton', () => {
    const { getByTestId, container } = render(<SettingsTrigger />);

    fireEvent.click(getByTestId('gear-button'));

    expect(container.querySelector('h2')).toHaveTextContent('My role settings');
  });
});
