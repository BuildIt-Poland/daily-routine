import React from 'react';
import { create } from 'react-test-renderer';

import LightbulbIcon from '../LightbulbIcon';

jest.mock('../../Icons', () => ({
  Lightbulb: 'Lightbulb'
}));

describe('COMPONENT - ActionButtons LightbulbIcon', () => {
  it('renders correctly', () => {
    const component = create(<LightbulbIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
