import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { GenderProvider } from '../../../context/GenderContext';
import GenderSettings from '../GenderSettings';

describe('COMPONENT - GenderSettings', () => {
  it('renders GenderSettings correctly with checked male', () => {
    const { container } = render(
      <GenderProvider>
        <GenderSettings />
      </GenderProvider>
    );
    const label = container.querySelectorAll('label')[0];
    const radioButton = label.querySelector('input');

    fireEvent.change(radioButton, { target: { value: 'male' } });
    expect(label).toHaveTextContent('Male');
  });

  it('renders GenderSettings correctly with checked female', () => {
    const { container } = render(
      <GenderProvider>
        <GenderSettings />
      </GenderProvider>
    );
    const label = container.querySelectorAll('label')[1];
    const radioButton = label.querySelector('input');

    fireEvent.change(radioButton, { target: { value: 'female' } });
    expect(label).toHaveTextContent('Female');
  });
});
