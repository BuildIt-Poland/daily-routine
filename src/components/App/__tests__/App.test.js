import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import App from '../App';

describe('COMPONENT - App', () => {
  it('renders correctly default route', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
