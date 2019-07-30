import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CraftedWithLove from '../CraftedWithLove';

afterEach(cleanup);

describe('COMPONENT - Footer CraftedWithLove', () => {
  it('renders Heart and Buildit icons', () => {
    const { container } = render(<CraftedWithLove />);

    expect(container.querySelector('a')).toBeDefined();
    expect(container.querySelectorAll('svg title')[0]).toHaveTextContent('LOVE');
    expect(container.querySelectorAll('svg title')[1]).toHaveTextContent('buildit');
  });
});
