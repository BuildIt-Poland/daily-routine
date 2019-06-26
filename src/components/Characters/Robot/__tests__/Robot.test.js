import React from 'react';
import { create } from 'react-test-renderer';

import { FEMALE } from '../../../../constants/genders';
import { DEFAULT } from '../../../../constants/roleActions';
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

  it('renders confusion marks if robot is in default pose', () => {
    const component = create(<Robot pose={DEFAULT} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks and flower if female robot is in default pose', () => {
    const component = create(<Robot pose={DEFAULT} gender={FEMALE} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
