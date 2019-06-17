import React from 'react';
import { create } from 'react-test-renderer';

import { FEMALE } from '../../../../constants/genders';
import { CONFUSED } from '../../../../constants/characterMoods';
import Robot from '../Robot';

jest.mock('../GenderFlower', () => 'GenderFlower');
jest.mock('../ConfusionMarks', () => 'ConfusionMarks');
jest.mock('../RobotArtwork', () => 'RobotArtwork');

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly with default props', () => {
    const component = create(<Robot />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders flower if female gender is passed', () => {
    const component = create(<Robot gender={FEMALE} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks if robot is confused', () => {
    const component = create(<Robot mood={CONFUSED} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks and flower if female robot is confused', () => {
    const component = create(<Robot mood={CONFUSED} gender={FEMALE} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
