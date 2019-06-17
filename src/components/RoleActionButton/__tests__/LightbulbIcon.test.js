import React from 'react';
import { create } from 'react-test-renderer';

import LightBulbIcon from '../LightBulbIcon';

jest.mock('../../Icons', () => ({
  Lightbulb: 'Lightbulb'
}));

describe('COMPONENT - RoleActionButton LightBulbIcon', () => {
  it('renders correctly', () => {
    const component = create(<LightBulbIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
