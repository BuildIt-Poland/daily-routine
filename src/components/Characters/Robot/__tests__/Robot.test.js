import React from 'react';
import { create } from 'react-test-renderer';

import { FEMALE, MALE } from '../../../../constants/genders';
import { DEFAULT } from '../../../../constants/roleActions';
import { GenderContext } from '../../../../context/GenderContext';
import Robot from '../Robot';

jest.mock('../GenderFlower', () => 'GenderFlower');
jest.mock('../ConfusionMarks', () => 'ConfusionMarks');
jest.mock('../RobotArtwork', () => 'RobotArtwork');

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly with default props', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Robot />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders flower if female gender is passed', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Robot />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks if robot is in default pose', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Robot pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks and flower if female robot is in default pose', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Robot pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
