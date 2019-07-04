import React from 'react';
import { create } from 'react-test-renderer';

import { DEFAULT } from '../../../../constants/roleActions';
import { GenderContext } from '../../../../context/GenderContext';
import { MALE, FEMALE } from '../../../../constants/genders';
import Whale from '../Whale';

jest.mock('../../../../context/GenderContext');
jest.mock('../GenderFlower', () => 'GenderFlower');
jest.mock('../ConfusionMarks', () => 'ConfusionMarks');
jest.mock('../WhaleArtwork', () => 'WhaleArtwork');
jest.mock('../AnimatedWhaleShadow', () => 'AnimatedWhaleShadow');

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly with default props', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Whale />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders flower if female gender is passed', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Whale />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks if whale is in default pose', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Whale pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks and flower if female whale is in default pose', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Whale pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
