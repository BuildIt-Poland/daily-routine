import React from 'react';
import { create } from 'react-test-renderer';

import GenderFlower from '../GenderFlower';

describe('COMPONENT - Characters GenderFlower', () => {
  it('renders flower with transparent fill when no props are passed', () => {
    const component = create(<GenderFlower />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correct fill color if it is passed', () => {
    const component = create(<GenderFlower fill="#ffaadd" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
