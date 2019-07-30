import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SugarCat from '../SugarCat';

afterEach(cleanup);

describe('COMPONENT - Characters SugarCat', () => {
  it('renders correct number of elements', () => {
    const { container } = render(<SugarCat />);

    expect(container.querySelector('svg title')).toHaveTextContent('Sugar cat');
    // Artwork and legs
    expect(container.querySelectorAll('svg')).toHaveLength(3);
  });
});
