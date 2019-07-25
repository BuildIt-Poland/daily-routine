import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CopyButton from '../CopyButton';

afterEach(cleanup);

describe('COMPONENT - QuoteBubble CopyButton', () => {
  it('renders correctly', () => {
    const { container } = render(<CopyButton valueToCopy="Taylor Swift" />);

    expect(container.querySelector('button')).toBeDefined();
    expect(container.querySelector('svg title')).toHaveTextContent('Copy');
  });
});
