import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import GenderSettings from '../GenderSettings';

describe('COMPONENT - GenderSettings', () => {
  it('renders GenderSettings correctly with checked male', () => {
    const { container } = render(<GenderSettings />);
    const radioButton = container.querySelectorAll('input')[0];

    fireEvent.change(radioButton, { target: { value: 'male' } });
    expect(radioButton.value).toBe('male');
  });

  it('renders GenderSettings correctly with checked female', () => {
    const { container } = render(<GenderSettings />);
    const radioButton = container.querySelectorAll('input')[1];

    fireEvent.change(radioButton, { target: { value: 'female' } });
    expect(radioButton.value).toBe('female');
  });
});
