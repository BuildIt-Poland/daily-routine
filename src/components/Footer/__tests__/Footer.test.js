import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Footer from '../Footer';

afterEach(cleanup);

describe('COMPONENT - Footer', () => {
  it('renders 3 external links', () => {
    const { container } = render(<Footer />);

    expect(container.querySelectorAll('a')).toHaveLength(3);
  });
});
