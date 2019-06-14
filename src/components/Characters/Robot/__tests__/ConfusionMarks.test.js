import React from 'react';
import { create } from 'react-test-renderer';

import ConfusionMarks from '../ConfusionMarks';

jest.mock('../../ConfusionMarks', () => 'ConfusionMarks');

describe('COMPONENT - Characters Robot GenderFlower', () => {
  it('renders correctly', () => {
    const component = create(<ConfusionMarks />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
