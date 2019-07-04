import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Navigation from '../Navigation';

afterEach(cleanup);

describe('COMPONENT - Navigation', () => {
  it('renders correct number of elements', () => {
    const { container } = render(
      <Navigation>
        <a href="#home">Home</a>
        <a href="#frontend">Front End</a>
        <a href="#backend">Back End</a>
        <a href="#devops">Dev Ops</a>
      </Navigation>
    );

    expect(container.querySelectorAll('a')).toHaveLength(4);
  });
});
