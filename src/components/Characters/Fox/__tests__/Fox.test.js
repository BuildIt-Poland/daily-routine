import React from 'react';
import { create } from 'react-test-renderer';

import { MALE, FEMALE } from '../../../../constants/genders';
import { DEFAULT } from '../../../../constants/roleActions';
import { GenderContext } from '../../../../context/GenderContext';
import Fox from '../Fox';

jest.mock('../GenderFlower', () => 'GenderFlower');
jest.mock('../ConfusionMarks', () => 'ConfusionMarks');
jest.mock('../FoxArtwork', () => 'FoxArtwork');
jest.mock('../Tail', () => 'Tail');

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly with default props', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Fox />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders flower if female gender is passed', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Fox />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks if fox is in default pose', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Fox pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks and flower if female fox is in default pose', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Fox pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
