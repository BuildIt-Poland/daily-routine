import React from 'react';
import { create } from 'react-test-renderer';

import ConfusionMarks from '../ConfusionMarks';

describe('COMPONENT - Characters ConfusionMarks', () => {
  it('renders correctly', () => {
    const component = create(<ConfusionMarks />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
