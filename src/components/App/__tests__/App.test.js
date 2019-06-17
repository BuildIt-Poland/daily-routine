import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import App from '../App';

jest.mock('../../WideButton', () => 'WideButton');
jest.mock('../../AppBar', () => 'AppBar');
jest.mock('../../Footer', () => 'Footer');
jest.mock('../../Characters', () => ({
  SugarCat: 'SugarCat'
}));

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
