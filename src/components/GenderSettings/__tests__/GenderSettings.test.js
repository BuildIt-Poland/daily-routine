import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import GenderSettings from '../GenderSettings';

describe('COMPONENT - GenderSettings', () => {
  it('renders GenderSettings correctly with checked male', () => {
    const { container } = render(<GenderSettings />);
    const label = container.querySelectorAll('label')[0];
    const radioButton = label.querySelector('input');

    fireEvent.change(radioButton, { target: { value: 'male' } });
    expect(label).toHaveTextContent('Male');
  });

  it('renders GenderSettings correctly with checked female', () => {
    const { container } = render(<GenderSettings />);
    const label = container.querySelectorAll('label')[1];
    const radioButton = label.querySelector('input');

    fireEvent.change(radioButton, { target: { value: 'female' } });
    expect(label).toHaveTextContent('Female');
  });
});
